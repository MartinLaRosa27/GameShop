const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
  username: {
    type: String,
    require: true,
    trim: true,
    minlength: 1,
    maxLength: 150,
  },

  email: {
    type: String,
    require: true,
    trim: true,
    maxLength: 30,
  },

  password: {
    type: String,
    require: true,
    trim: true,
  },

  createdAt: {
    type: Date,
    default: Date.now(),
    require: true,
  },
});

module.exports = User = mongoose.model("User", UserSchema);
