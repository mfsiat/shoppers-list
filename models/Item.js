// 1. bring in the DB 
// 2. Define the DB (schema)

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema 
const ItemSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

// export the module
module.exports = Item = mongoose.model('item', ItemSchema);