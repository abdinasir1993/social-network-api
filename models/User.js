const { Schema, model } = require('mongoose');

const userSchema = {
  username: {
    type: String,
    required: true,
    minLength: 2,
    maxLength: 50,
    trim: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    minLength: 2,
    maxLength: 50,
    trim: true,
    unique: true,
  },
  thoughts: {
    type: String,
    trim: true,
  },
  friends: {
    type: String,
    trim: true,
  },
};

const schema = new Schema(userSchema);

const User = model('User', schema);

module.exports = User;
