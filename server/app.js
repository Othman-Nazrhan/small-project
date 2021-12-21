const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const studentRoute = require('./router/studentRoute');
const path = require('path');

// mongoose connexion

mongoose.connect('mongodb+srv://test:Qwerty@cluster0.0lzmc.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
  
{ useNewUrlParser: true,
    useUnifiedTopology: true })
    
  .then(() => console.log('mongodb run with port 3000 !'))
  .catch(() => console.log('error mongodb !'));

// Erreurs de CORS
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/api/student',  studentRoute);


module.exports= app;