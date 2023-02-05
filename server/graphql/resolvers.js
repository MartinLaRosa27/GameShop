const { postUser, authenticateUser } = require("../controllers/userController");
const { auth } = require("../middleware/auth");

module.exports.resolvers = {
  Query: {
    // user:
    authenticateUser: (root, { input }, context) => {
      return authenticateUser(input);
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
