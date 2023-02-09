const { postUser, authenticateUser } = require("../controllers/userController");
const { getCategoryByTitle } = require("../controllers/categoryController");
const {
  getNewArrivals,
  getById,
  getByCategory,
} = require("../controllers/productController");
const { auth } = require("../middleware/auth");

module.exports.resolvers = {
  Query: {
    // user:
    authenticateUser: (root, { input }, context) => {
      return authenticateUser(input);
    },

    // product:
    getNewArrivals: (root, {}, context) => {
      return getNewArrivals();
    },

    getByCategory: (root, { categoryId, date, price }, context) => {
      return getByCategory(categoryId, date, price);
    },

    getById: (root, { id }, context) => {
      return getById(id);
    },

    // category:
    getCategoryByTitle: (root, { title }, context) => {
      return getCategoryByTitle(title);
    },

    // auth:
    auth: (root, { token }, context) => {
      return auth(token);
    },
  },

  Mutation: {
    // user:
    postUser: (root, { input }, context) => {
      return postUser(input);
    },
  },
};
