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
    Allergies: [Allergy]
  }
  type Med {
    _id: ID
    medName: String
    dose: Int
    unit: String
  }
  type Allergy {
    _id: ID
    allergin: String
    reaction: String
  }
  type Query {
    Users: [User]
    Account: [Account]
    Meds: [Med]
    Allergy: [Allergy]
  }
  type Mutation {
    createAccount(accountId: ID!, email: String!, password: String!): Account
    createUser(firstName: String!, lastName: String!, DOB: String!, smoker: Boolean!, _id: ID!): Account
    createMed(medName: String!, dose: Float!, unit: String!, _id: ID!) : User
    createAllergy(allergin: String!, reaction: String!, _id: ID!) : User
  }
`;
module.exports = typeDefs;
