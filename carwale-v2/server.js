require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/carwale';

// ── MIDDLEWARE ─────────────────────────────────────────
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// ── MONGODB CONNECTION ─────────────────────────────────
mongoose.connect(MONGODB_URI)
  .then(() => console.log('✅ MongoDB Connected:', MONGODB_URI))
  .catch(err => {
    console.log('❌ MongoDB Error:', err.message);
    console.log('👉 Run: mongod  (to start MongoDB)');
  });

// ── API ROUTES ─────────────────────────────────────────
app.use('/api/auth',      require('./routes/auth'));
app.use('/api/cars',      require('./routes/cars'));
app.use('/api/brands',    require('./routes/brands'));
app.use('/api/used-cars', require('./routes/usedCars'));
app.use('/api/news',      require('./routes/news'));

// ── SERVE FRONTEND ─────────────────────────────────────
app.get('/login',    (req, res) => res.sendFile(path.join(__dirname, 'public', 'login.html')));
app.get('/register', (req, res) => res.sendFile(path.join(__dirname, 'public', 'login.html')));
app.get('*',         (req, res) => res.sendFile(path.join(__dirname, 'public', 'index.html')));

app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
