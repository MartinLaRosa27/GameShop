const Product = require("../models/Product");

module.exports.getNewArrivals = async () => {
  try {
    const products = await Product.find()
      .sort({ createdAt: "desc" })
      .limit(4)
      .exec();
    return products;
  } catch (e) {
    console.log(e);
    throw new Error("Cannot get the new arrivals");
  }
};

module.exports.getById = async (id) => {
  try {
    const product = await Product.findOne({
      _id: id,
    });
    return product;
  } catch (e) {
    console.log(e);
    throw new Error("Cannot get the product");
  }
};

module.exports.getByCategory = async (categoryId, date, price) => {
  if (!price) {
    try {
      const product = await Product.find({
        categoryId,
      }).sort({ createdAt: date });
      return product;
    } catch (e) {
      console.log(e);
      throw new Error("Cannot get the products");
    }
  }
  try {
    const product = await Product.find({
      categoryId,
    }).sort({ price });
    return product;
  } catch (e) {
    console.log(e);
    throw new Error("Cannot get the products");
  }
};
