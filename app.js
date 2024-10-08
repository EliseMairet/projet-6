const express = require ('express');
const mongoose = require('mongoose');
const helmet = require("helmet");
require("dotenv").config();
const bookRoutes = require('./routes/book');
const userRoutes = require('./routes/user');
const app = express();

app
.use(express.json())
.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});

mongoose.connect(process.env.MONGODB_DB)

.then(() => console.log('Connexion à MongoDB réussie !'))
.catch(() => console.log('Connexion à MongoDB échouée !'));

app.use(helmet({
  crossOriginResourcePolicy: false
}))

//Routes
app.use('/api/books', bookRoutes);
app.use('/api/auth', userRoutes);
app.use('/images', express.static('images'));

module.exports = app;