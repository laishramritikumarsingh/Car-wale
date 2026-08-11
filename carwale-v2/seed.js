require('dotenv').config();
const mongoose = require('mongoose');
const Car      = require('./models/Car');
const Brand    = require('./models/Brand');
const UsedCar  = require('./models/UsedCar');
const News     = require('./models/News');

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/carwale')
  .then(() => console.log('✅ MongoDB Connected'))
  .catch(err => { console.error('❌', err.message); process.exit(1); });

const brands = [
  { name: 'Maruti Suzuki', slug: 'maruti-suzuki', country: 'Japan/India', isPopular: true, carCount: 18 },
  { name: 'Tata',          slug: 'tata',          country: 'India',        isPopular: true, carCount: 15 },
  { name: 'Mahindra',      slug: 'mahindra',       country: 'India',        isPopular: true, carCount: 12 },
  { name: 'Hyundai',       slug: 'hyundai',        country: 'South Korea',  isPopular: true, carCount: 14 },
  { name: 'Toyota',        slug: 'toyota',         country: 'Japan',        isPopular: true, carCount: 10 },
  { name: 'Kia',           slug: 'kia',            country: 'South Korea',  isPopular: true, carCount: 8  },
  { name: 'Skoda',         slug: 'skoda',          country: 'Czech Republic',isPopular: true, carCount: 6 },
  { name: 'BMW',           slug: 'bmw',            country: 'Germany',      isPopular: true, carCount: 20 },
  { name: 'Renault',       slug: 'renault',        country: 'France',       isPopular: true, carCount: 7  },
  { name: 'Nissan',        slug: 'nissan',         country: 'Japan',        isPopular: true, carCount: 5  },
  { name: 'Mercedes-Benz', slug: 'mercedes-benz',  country: 'Germany',      isPopular: true, carCount: 25 },
  { name: 'MG',            slug: 'mg',             country: 'UK/China',     isPopular: true, carCount: 7  },
  { name: 'Honda',         slug: 'honda',          country: 'Japan',        isPopular: false, carCount: 6 },
  { name: 'Volkswagen',    slug: 'volkswagen',     country: 'Germany',      isPopular: false, carCount: 5 },
  { name: 'Jeep',          slug: 'jeep',           country: 'USA',          isPopular: false, carCount: 4 },
];

const cars = [
  { name:'Maruti Swift', brand:'Maruti Suzuki', model:'Swift', priceMin:579000, priceMax:880000, bodyType:'Hatchback', fuelType:'Petrol', transmission:'Manual', seatingCapacity:5, slug:'maruti-swift', isTrending:true, rating:4.2, reviewCount:1240 },
  { name:'Maruti Baleno', brand:'Maruti Suzuki', model:'Baleno', priceMin:599000, priceMax:910000, bodyType:'Hatchback', fuelType:'Petrol', transmission:'Automatic', seatingCapacity:5, slug:'maruti-baleno', isTrending:true, rating:4.1, reviewCount:980 },
  { name:'Maruti Dzire', brand:'Maruti Suzuki', model:'Dzire', priceMin:626000, priceMax:931000, bodyType:'Sedan', fuelType:'Petrol', transmission:'Automatic', seatingCapacity:5, slug:'maruti-dzire', isTrending:true, rating:4.3, reviewCount:2100 },
  { name:'Maruti Fronx', brand:'Maruti Suzuki', model:'Fronx', priceMin:685000, priceMax:1198000, bodyType:'SUV', fuelType:'Petrol', transmission:'Automatic', seatingCapacity:5, slug:'maruti-fronx', rating:4.0, reviewCount:560 },
  { name:'Maruti Brezza', brand:'Maruti Suzuki', model:'Brezza', priceMin:826000, priceMax:1301000, bodyType:'SUV', fuelType:'Petrol', transmission:'Automatic', seatingCapacity:5, slug:'maruti-brezza', rating:4.2, reviewCount:870 },
  { name:'Maruti Grand Vitara', brand:'Maruti Suzuki', model:'Grand Vitara', priceMin:1077000, priceMax:1972000, bodyType:'SUV', fuelType:'Hybrid', transmission:'Automatic', seatingCapacity:5, slug:'maruti-grand-vitara', rating:4.3, reviewCount:430 },
  { name:'Maruti Wagon R', brand:'Maruti Suzuki', model:'Wagon R', priceMin:499000, priceMax:695000, bodyType:'Hatchback', fuelType:'Petrol', transmission:'Manual', seatingCapacity:5, slug:'maruti-wagon-r', rating:4.0, reviewCount:1500 },
  { name:'Maruti Ertiga', brand:'Maruti Suzuki', model:'Ertiga', priceMin:880000, priceMax:1294000, bodyType:'MPV', fuelType:'Petrol', transmission:'Automatic', seatingCapacity:7, slug:'maruti-ertiga', rating:4.2, reviewCount:760 },
  { name:'Tata Punch', brand:'Tata', model:'Punch', priceMin:560000, priceMax:1055000, bodyType:'SUV', fuelType:'Petrol', transmission:'Manual', seatingCapacity:5, slug:'tata-punch', rating:4.1, reviewCount:1100 },
  { name:'Tata Nexon', brand:'Tata', model:'Nexon', priceMin:732000, priceMax:1415000, bodyType:'SUV', fuelType:'Petrol', transmission:'Automatic', seatingCapacity:5, slug:'tata-nexon', rating:4.4, reviewCount:2300, description:"India's #1 SUV." },
  { name:'Tata Tiago', brand:'Tata', model:'Tiago', priceMin:457000, priceMax:782000, bodyType:'Hatchback', fuelType:'Petrol', transmission:'Manual', seatingCapacity:5, slug:'tata-tiago', rating:4.0, reviewCount:870 },
  { name:'Tata Harrier', brand:'Tata', model:'Harrier', priceMin:1289000, priceMax:2525000, bodyType:'SUV', fuelType:'Diesel', transmission:'Automatic', seatingCapacity:5, slug:'tata-harrier', rating:4.4, reviewCount:980 },
  { name:'Tata Punch EV', brand:'Tata', model:'Punch EV', priceMin:809000, priceMax:1259000, bodyType:'SUV', fuelType:'Electric', transmission:'Automatic', seatingCapacity:5, slug:'tata-punch-ev', rating:4.2, reviewCount:430 },
  { name:'Tata Harrier EV', brand:'Tata', model:'Harrier EV', priceMin:2149000, priceMax:3023000, bodyType:'SUV', fuelType:'Electric', transmission:'Automatic', seatingCapacity:5, slug:'tata-harrier-ev', rating:4.6, reviewCount:120 },
  { name:'Hyundai Creta', brand:'Hyundai', model:'Creta', priceMin:1079000, priceMax:2020000, bodyType:'SUV', fuelType:'Petrol', transmission:'Automatic', seatingCapacity:5, slug:'hyundai-creta', rating:4.5, reviewCount:3200 },
  { name:'Hyundai Venue', brand:'Hyundai', model:'Venue', priceMin:800000, priceMax:1569000, bodyType:'SUV', fuelType:'Petrol', transmission:'Automatic', seatingCapacity:5, slug:'hyundai-venue', rating:4.2, reviewCount:1800 },
  { name:'Hyundai Verna', brand:'Hyundai', model:'Verna', priceMin:1098000, priceMax:1840000, bodyType:'Sedan', fuelType:'Petrol', transmission:'Automatic', seatingCapacity:5, slug:'hyundai-verna', isTrending:true, rating:4.4, reviewCount:1200 },
  { name:'Hyundai i20', brand:'Hyundai', model:'i20', priceMin:599000, priceMax:1057000, bodyType:'Hatchback', fuelType:'Petrol', transmission:'Automatic', seatingCapacity:5, slug:'hyundai-i20', isTrending:true, rating:4.3, reviewCount:1600 },
  { name:'Kia Seltos', brand:'Kia', model:'Seltos', priceMin:1099000, priceMax:2019000, bodyType:'SUV', fuelType:'Petrol', transmission:'Automatic', seatingCapacity:5, slug:'kia-seltos', rating:4.5, reviewCount:2100 },
  { name:'Kia Sonet', brand:'Kia', model:'Sonet', priceMin:730000, priceMax:1409000, bodyType:'SUV', fuelType:'Petrol', transmission:'Automatic', seatingCapacity:5, slug:'kia-sonet', rating:4.3, reviewCount:1400 },
  { name:'Mahindra Thar', brand:'Mahindra', model:'Thar', priceMin:999000, priceMax:1719000, bodyType:'SUV', fuelType:'Diesel', transmission:'Manual', seatingCapacity:4, slug:'mahindra-thar', rating:4.6, reviewCount:2200 },
  { name:'Mahindra Scorpio N', brand:'Mahindra', model:'Scorpio N', priceMin:1349000, priceMax:2434000, bodyType:'SUV', fuelType:'Petrol', transmission:'Automatic', seatingCapacity:7, slug:'mahindra-scorpio-n', rating:4.5, reviewCount:1800 },
  { name:'Mahindra Thar Roxx', brand:'Mahindra', model:'Thar Roxx', priceMin:1239000, priceMax:2225000, bodyType:'SUV', fuelType:'Diesel', transmission:'Automatic', seatingCapacity:5, slug:'mahindra-thar-roxx', rating:4.7, reviewCount:340 },
  { name:'Mahindra XUV 3XO', brand:'Mahindra', model:'XUV 3XO', priceMin:737000, priceMax:1455000, bodyType:'SUV', fuelType:'Petrol', transmission:'Automatic', seatingCapacity:5, slug:'mahindra-xuv-3xo', rating:4.3, reviewCount:760 },
  { name:'Mahindra BE 6', brand:'Mahindra', model:'BE 6', priceMin:1890000, priceMax:2849000, bodyType:'SUV', fuelType:'Electric', transmission:'Automatic', seatingCapacity:5, slug:'mahindra-be-6', rating:4.6, reviewCount:180 },
  { name:'Toyota Innova Hycross', brand:'Toyota', model:'Innova Hycross', priceMin:1915000, priceMax:3238000, bodyType:'MPV', fuelType:'Hybrid', transmission:'Automatic', seatingCapacity:8, slug:'toyota-innova-hycross', rating:4.6, reviewCount:870 },
  { name:'Toyota Glanza', brand:'Toyota', model:'Glanza', priceMin:646000, priceMax:944000, bodyType:'Hatchback', fuelType:'Petrol', transmission:'Automatic', seatingCapacity:5, slug:'toyota-glanza', rating:4.2, reviewCount:430 },
  { name:'Toyota Urban Cruiser Hyryder', brand:'Toyota', model:'Urban Cruiser Hyryder', priceMin:1099000, priceMax:2019000, bodyType:'SUV', fuelType:'Hybrid', transmission:'Automatic', seatingCapacity:5, slug:'toyota-hyryder', rating:4.4, reviewCount:560 },
  { name:'Skoda Kylaq', brand:'Skoda', model:'Kylaq', priceMin:759000, priceMax:1299000, bodyType:'SUV', fuelType:'Petrol', transmission:'Automatic', seatingCapacity:5, slug:'skoda-kylaq', rating:4.5, reviewCount:280 },
  { name:'Volkswagen Taigun', brand:'Volkswagen', model:'Taigun', priceMin:1142000, priceMax:1919000, bodyType:'SUV', fuelType:'Petrol', transmission:'Automatic', seatingCapacity:5, slug:'volkswagen-taigun', isTrending:true, rating:4.4, reviewCount:780 },
  { name:'Honda Elevate', brand:'Honda', model:'Elevate', priceMin:1164000, priceMax:1990000, bodyType:'SUV', fuelType:'Petrol', transmission:'Automatic', seatingCapacity:5, slug:'honda-elevate', rating:4.3, reviewCount:430 },
  { name:'Renault Duster', brand:'Renault', model:'Duster', priceMin:950000, priceMax:1900000, bodyType:'SUV', fuelType:'Petrol', transmission:'Automatic', seatingCapacity:5, slug:'renault-duster', isTrending:true, rating:4.3, reviewCount:90 },
  { name:'MG Windsor EV', brand:'MG', model:'Windsor EV', priceMin:1198000, priceMax:1595000, bodyType:'SUV', fuelType:'Electric', transmission:'Automatic', seatingCapacity:5, slug:'mg-windsor-ev', rating:4.3, reviewCount:320 },
  { name:'Nissan Tekton', brand:'Nissan', model:'Tekton', priceMin:1100000, priceMax:1800000, bodyType:'SUV', fuelType:'Petrol', transmission:'Automatic', seatingCapacity:5, slug:'nissan-tekton', isUpcoming:true, category:'upcoming', launchDate:'Mar 2026', rating:4.0, reviewCount:0 },
];

const usedCars = [
  { name:'Toyota Fortuner 2020', brand:'Toyota', model:'Fortuner', year:2020, price:2800000, km:45000, fuelType:'Diesel', transmission:'Automatic', city:'Delhi', owner:'1st Owner', isCertified:true },
  { name:'Hyundai Verna 2021', brand:'Hyundai', model:'Verna', year:2021, price:780000, km:32000, fuelType:'Petrol', transmission:'Automatic', city:'Mumbai', owner:'1st Owner', isCertified:true },
  { name:'Maruti Swift DZire 2019', brand:'Maruti Suzuki', model:'Swift DZire', year:2019, price:520000, km:55000, fuelType:'Petrol', transmission:'Manual', city:'Bangalore', owner:'2nd Owner' },
  { name:'Mahindra Thar 2022', brand:'Mahindra', model:'Thar', year:2022, price:1450000, km:18000, fuelType:'Diesel', transmission:'Manual', city:'Pune', owner:'1st Owner', isCertified:true },
  { name:'Tata Nexon 2021', brand:'Tata', model:'Nexon', year:2021, price:920000, km:28000, fuelType:'Petrol', transmission:'Automatic', city:'Delhi', owner:'1st Owner', isCertified:true },
  { name:'Hyundai Creta 2020', brand:'Hyundai', model:'Creta', year:2020, price:1150000, km:42000, fuelType:'Petrol', transmission:'Automatic', city:'Mumbai', owner:'1st Owner' },
  { name:'Kia Seltos 2021', brand:'Kia', model:'Seltos', year:2021, price:1280000, km:35000, fuelType:'Diesel', transmission:'Automatic', city:'Gurgaon', owner:'1st Owner', isCertified:true },
  { name:'Honda City 2019', brand:'Honda', model:'City', year:2019, price:780000, km:58000, fuelType:'Petrol', transmission:'Automatic', city:'Kolkata', owner:'2nd Owner' },
];

const newsData = [
  { title:'Chery Lepas L6 Patented in India', excerpt:'Lepas is a new sub-brand targeting young audiences.', author:'Dwij Bhandut', category:'News', slug:'chery-lepas-l6-patented', publishedAt:new Date('2026-03-14') },
  { title:'Ferrari 849 Testarossa Debuts in India at Rs 10.37 Crore', excerpt:'Ferrari unveiled the 849 Testarossa in India today.', author:'Haji Chakralwale', category:'Launch', slug:'ferrari-849-testarossa-india', publishedAt:new Date('2026-03-14') },
  { title:'Kia Carens Clavis Long-Term Review City Report', excerpt:'After a month, the Clavis has become a go-to for the daily commute.', author:'Santosh Nair', category:'Review', slug:'kia-carens-clavis-review', publishedAt:new Date('2026-03-13') },
  { title:'BMW M2 CS First Look Review', excerpt:'The new BMW M2 CS is aimed at driving purists who want a compact sports car.', author:'Santosh Nair', category:'Review', slug:'bmw-m2-cs-first-look', publishedAt:new Date('2026-03-13') },
  { title:'Tata Punch EV Facelift First Drive Review', excerpt:'Strategic upgrades make the Punch EV an even stronger proposition.', author:'Desirazu Venkat', category:'Review', slug:'tata-punch-ev-facelift', publishedAt:new Date('2026-02-28') },
  { title:'Maruti Suzuki Dzire Reaches 3 Million Sales', excerpt:'The compact sedan has crossed 3 million cumulative sales since 2008.', author:'Haji Chakralwale', category:'News', slug:'maruti-dzire-3-million', publishedAt:new Date('2026-03-13') },
];

async function seed() {
  try {
    await Car.deleteMany({});
    await Brand.deleteMany({});
    await UsedCar.deleteMany({});
    await News.deleteMany({});
    await Brand.insertMany(brands);
    await Car.insertMany(cars);
    await UsedCar.insertMany(usedCars);
    await News.insertMany(newsData);
    console.log(`✅ Seeded: ${brands.length} brands, ${cars.length} cars, ${usedCars.length} used cars, ${newsData.length} news`);
    process.exit(0);
  } catch (err) {
    console.error('❌ Seed error:', err.message);
    process.exit(1);
  }
}
seed();
