const mongoose = require("mongoose");

const CategorySchema = mongoose.Schema({
  title: {
    type: String,
    require: true,
    trim: true,
    minlength: 1,
    maxLength: 150,
  },

  createdAt: {
    type: Date,
    default: Date.now(),
    require: true,
  },
});

module.exports = Category = mongoose.model("Category", CategorySchema);
