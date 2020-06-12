const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

// add the api 
const items = require('./routes/api/items');

const app = express();

// Bodyparser Middleware 
app.use(bodyParser.json());

// DB config 
const db = require('./config/keys').mongoURI;

// Connect to mongo 
// this is promise based
mongoose
  .connect(db)
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

// use routes 
// anything that goes to api/items will refer to items variable
app.use('/api/items', items);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));

