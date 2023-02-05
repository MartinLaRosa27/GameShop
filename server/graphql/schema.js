const { gql } = require("apollo-server");

module.exports.typeDefs = gql`
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

  type Query {
    authenticateUser(input: userInput): String
    auth(token: String): userType
  }

  type Mutation {
    postUser(input: userInput): String
  }
`;
