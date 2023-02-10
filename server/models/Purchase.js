const mongoose = require("mongoose");

const PurchaseSchema = mongoose.Schema({
  items: {
    type: Array,
    require: true,
  },

  total: {
    type: Number,
    default: 0,
    require: true,
  },

  createdAt: {
    type: Date,
    default: Date.now(),
    require: true,
  },

  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Product",
    require: true,
  },
});

module.exports = Purchase = mongoose.model("Purchase", PurchaseSchema);
