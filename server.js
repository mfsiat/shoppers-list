const express = require('express');
const mongoose = require('mongoose');
// const bodyParser = require('body-parser');
const path = require('path');

// add the api
// const items = require('./routes/api/items');

const app = express();

// Bodyparser Middleware
app.use(express.json());

// DB config
const db = require('./config/keys').mongoURI;

// Connect to mongo
// this is promise based
// two new value added on the constructor 
mongoose
  .connect(db, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
  }) // adding new mongo url parser 
  .then(() => console.log('MongoDB Connected'))
  .catch((err) => console.log(err));

// use routes
// anything that goes to api/items will refer to items variable
app.use('/api/items', require('./routes/api/items'));
app.use('/api/users', require('./routes/api/users'));

// Serve static assets if in production
if (process.env.NODE_ENV === 'production') {
  // Set static folder
  app.use(express.static('client/build'));

  app.get('*', () => {
    resizeBy.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));
