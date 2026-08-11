const mongoose = require('mongoose');

const carSchema = new mongoose.Schema({
  name: { type: String, required: true },
  brand: { type: String, required: true },
  model: { type: String, required: true },
  priceMin: { type: Number, required: true },
  priceMax: { type: Number },
  bodyType: { type: String, enum: ['SUV', 'Hatchback', 'Sedan', 'MPV', 'Coupe', 'Convertible', 'Pickup'] },
  fuelType: { type: String, enum: ['Petrol', 'Diesel', 'Electric', 'Hybrid', 'CNG'] },
  transmission: { type: String, enum: ['Manual', 'Automatic', 'CVT', 'DCT'] },
  seatingCapacity: { type: Number },
  image: { type: String, default: '' },      // URL of real car image
  slug: { type: String, required: true, unique: true },
  isTrending: { type: Boolean, default: false },
  isUpcoming: { type: Boolean, default: false },
  launchDate: { type: String },
  rating: { type: Number, min: 0, max: 5, default: 4.0 },
  reviewCount: { type: Number, default: 0 },
  description: { type: String },
  category: { type: String, enum: ['new', 'upcoming'], default: 'new' }
}, { timestamps: true });

module.exports = mongoose.model('Car', carSchema);
