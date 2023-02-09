const mongoose = require("mongoose");

const ProductSchema = mongoose.Schema({
  name: {
    type: String,
    require: true,
    trim: true,
    minlength: 1,
    maxLength: 150,
  },

  description: {
    type: String,
    require: true,
    trim: true,
    minlength: 10,
    maxLength: 244,
  },

  img: {
    type: Array,
    require: true,
    trim: true,
  },

  releaseDate: {
    type: Date,
    default: Date.now(),
    require: true,
  },

  price: {
    type: Number,
    require: true,
  },

  stock: {
    type: Number,
    default: 0,
    require: true,
  },

  createdAt: {
    type: Date,
    default: Date.now(),
    require: true,
  },

  categoryId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category",
    require: true,
  },
});

module.exports = Product = mongoose.model("Product", ProductSchema);
