// 1. bring in the DB 
// 2. Define the DB (schema)

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema 
const UserSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  register_date: {
    type: Date,
    default: Date.now
  }
});

// export the module
module.exports = User = mongoose.model('user', UserSchema);