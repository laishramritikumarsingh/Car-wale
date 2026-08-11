const express = require('express');
const router = express.Router();
const UsedCar = require('../models/UsedCar');

router.get('/', async (req, res) => {
  try {
    const { city, brand, fuelType, transmission, minPrice, maxPrice, search, limit = 100, page = 1 } = req.query;
    const filter = {};
    if (city) filter.city = new RegExp(city, 'i');
    if (brand) filter.brand = new RegExp(brand, 'i');
    if (fuelType) filter.fuelType = fuelType;
    if (transmission) filter.transmission = transmission;
    if (search) filter.$or = [{ name: new RegExp(search, 'i') }, { brand: new RegExp(search, 'i') }];
    if (minPrice || maxPrice) {
      filter.price = {};
      if (minPrice) filter.price.$gte = Number(minPrice);
      if (maxPrice) filter.price.$lte = Number(maxPrice);
    }
    const skip = (Number(page) - 1) * Number(limit);
    const cars = await UsedCar.find(filter).skip(skip).limit(Number(limit)).sort({ createdAt: -1 });
    const total = await UsedCar.countDocuments(filter);
    res.json({ success: true, data: cars, total });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const car = await UsedCar.findById(req.params.id);
    if (!car) return res.status(404).json({ success: false, message: 'Car not found' });
    res.json({ success: true, data: car });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

router.post('/', async (req, res) => {
  try {
    const car = new UsedCar(req.body);
    await car.save();
    res.status(201).json({ success: true, data: car });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
});

router.put('/:id', async (req, res) => {
  try {
    const car = await UsedCar.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!car) return res.status(404).json({ success: false, message: 'Car not found' });
    res.json({ success: true, data: car });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    await UsedCar.findByIdAndDelete(req.params.id);
    res.json({ success: true, message: 'Used car deleted' });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

module.exports = router;
