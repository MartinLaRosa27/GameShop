const { gql } = require("apollo-server");

module.exports.typeDefs = gql`
  scalar Date
  scalar Array

  input userInput {
    email: String!
    password: String!
    username: String
    passwordAux: String
  }

  type userType {
    _id: String!
    email: String!
    username: String!
  }

  type productType {
    _id: String!
    name: String!
    description: String!
    releaseDate: Date!
    img: Array!
    stock: Int!
    price: Float!
  }

  type categoryType {
    _id: String!
    title: String!
  }

  type Query {
    authenticateUser(input: userInput): String
    auth(token: String): userType
    getNewArrivals: [productType]
    getByCategory(
      categoryId: String
      date: String
      price: String
    ): [productType]
    getById(id: String): productType
    getCategoryByTitle(title: String): categoryType
  }

  type Mutation {
    postUser(input: userInput): String
  }
`;
