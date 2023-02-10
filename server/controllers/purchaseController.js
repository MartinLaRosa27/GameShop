const Purchase = require("../models/Purchase");
const Product = require("../models/Product");

module.exports.postPurchase = async (selectedProducts, user) => {
  if (user) {
    try {
      let product;
      let total = 0;

      //   Verify Stock:
      for (let i = 0; i < selectedProducts.length; i++) {
        product = await Product.findOne({
          _id: selectedProducts[i]._id,
        });
        if (product.stock < selectedProducts[i].quantity) {
          throw new Error(
            `Cannot satisfy the request of: ${product.name} (x${selectedProducts[i].quantity})`
          );
        }
      }

      //   Delete Sock:
      for (let i = 0; i < selectedProducts.length; i++) {
        await Product.findOneAndUpdate(
          { _id: selectedProducts[i]._id },
          {
            stock: selectedProducts[i].stock - selectedProducts[i].quantity,
          },
          { new: true }
        );
        total =
          total + selectedProducts[i].price * selectedProducts[i].quantity;
      }

      //   Make Purchase:
      const newPurchase = new Purchase({
        items: selectedProducts,
        total,
        userId: user._id,
      });
      await newPurchase.save();

      return "Purchase made successfully";
    } catch (e) {
      console.log(e);
      return e;
    }
  }
  throw new Error("session expired");
};
