const mongoose = require("mongoose");

module.exports.DBConnection = () => {
  try {
    mongoose.connect(`${process.env.MONGO_URI}${process.env.MONGO_DATABASE}`);
    console.log("Database Connect Successfully");
  } catch (e) {
    console.log(e);
  }
};
