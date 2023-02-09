const Category = require("../models/Category");

module.exports.getCategoryByTitle = async (title) => {
  try {
    const category = await Category.findOne({
      title
    });
    return category;
  } catch (e) {
    console.log(e);
    throw new Error("Cannot get the new category");
  }
};
