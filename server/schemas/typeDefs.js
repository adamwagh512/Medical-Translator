const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Account {
    _id: ID
    email: String
    password: String
    Users: [User]
  }
  type User {
    _id: ID
    firstName: String
    lastName: String
    DOB: String
    smoker: Boolean
    Meds: [Med]
  }
  type Med {
    _id: ID
    medName: String
    dose: Int
    unit: String
  }
  type Query {
    Users: [User]
    Account: [Account]
    Meds: [Med]
  }
  type Mutation {
    createAccount(accountId: ID!, email: String!, password: String!): Account
    createUser(firstName: String!, lastName: String!, DOB: String!, smoker: Boolean!): User
    createMed(medName: String!, dose: Float!, unit: String!, _id: ID!) : User
  }
`;
module.exports = typeDefs;
