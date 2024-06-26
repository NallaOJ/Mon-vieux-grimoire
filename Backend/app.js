const express = require('express');
const mongoose = require('mongoose');

const booksRoutes = require('./routes/books')
const userRoutes = require('./routes/user')


// Connexion à MongoDB
mongoose.connect('mongodb+srv://OJMVG:POCnalla01@cluster0.aabwij2.mongodb.net/mydatabase?retryWrites=true&w=majority',
  { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch((err) => console.error('Connexion à MongoDB échouée :', err));

  const app = express();

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});

//Traite les requêtes HTTP au format JSON
app.use(express.json());

app.use('/api/books', booksRoutes);
app.use('/api/auth', userRoutes);
app.use('/images', express.static(path.join(_dirname, 'images')));



module.exports = app;
