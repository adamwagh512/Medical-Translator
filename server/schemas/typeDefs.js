const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Account {
    _id: ID
    email: String
    password: String
    Users: [User]
  }
  type User {
    firstName: String
    lastName: String
    DOB: String
    smoker: Boolean
  }
  type Query {
    Users: [User]
    Account: [Account]
  }
  type Mutation {
    createAccount(accountId: ID!, email: String!, password: String!): Account
  }
`;
module.exports = typeDefs;
