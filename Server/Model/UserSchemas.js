const mongoose = require("mongoose");
const validator = require("validator");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  age: {
    type: Number,
    required: true,
  },
  email: {
    type: String,
    required: true,
    lowercase: true,
    trim: true,
  
  },
  password: {
    type: String,
    required: true,
    // unique: true,
  },
  phone: {
    type: Number,
    required: true,
  },
});

const usersModal = mongoose.model("UserList", userSchema);

module.exports = usersModal;
