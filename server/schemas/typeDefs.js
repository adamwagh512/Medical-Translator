const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Account {
    accountId: ID
    email: String
    password: String
    Users: [Users]
  }
  type Users {
    firstName: String
    lastName: String
    DOB: String
    smoker: Boolean
  }
  type Query {
    User: [Users]
    Account: [Account]
  }
  type Mutation {
    createAccount(accountId: ID!, email: String!, password: String!): Account
  }
`;
module.exports = typeDefs;
