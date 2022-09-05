const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Account {
    _id: ID
    email: String
    password: String
    Users: [User]!
  }
  type User {
    _id: ID
    firstName: String
    lastName: String
    DOB: String
    smoker: Boolean
    Meds: [Med]
    Allergies: [Allergy]
    Contact: [Contact]
    Physician: [Physician]
    Surgery: [Surgery]
    History: [History]
    Pain: [Pain]
    Emergency:[Emergency]
  
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
  type History {
    _id: ID
    issue: String
  }
  type Contact {
    _id: ID
    name: String
    email: String
    phone: String
  }
  type Physician {
    _id: ID
    name: String
    speciality: String
    email: String
    phone: String
  }
  type Surgery {
    _id: ID
    description: String
    date: String
    hospital: String
    hospitalCity: String
    surgeon: String
  }
  type Pain {
    _id: ID
    onset: String
    provocation: String
    quality: String
    location: String
    severity: Int
    timing: String
  }
  type Emergency{
    _id: ID
    currentProblem: String
  }

  type Query {
    Users: [User]
    Account: [Account]
    Meds: [Med]
    Allergies: [Allergy]
    History: [History]
    Contact: [Contact]
    Physician: [Physician]
    Surgery: [Surgery]
    Pain: [Pain]
    Emergency: [Emergency]
  }

  type Mutation {
    createAccount(email: String!, password: String!): Account
    deleteAccount(_id: ID!): Account
    createUser(firstName: String!, lastName: String!, DOB: String!, smoker: Boolean!, _id: ID!): Account
    deleteUser(_id: ID) : Account
    createMed(medName: String!, dose: Float!, unit: String!, _id: ID!) : User
    deleteMed(_id: ID!): Med
    createAllergy(allergin: String!, reaction: String!, _id: ID!) : User
    deleteAllergy(_id: ID!): Allergy
    createContact(name: String!, email:String!, phone:String!, _id:ID): User
    deleteContact(_id: ID!): Contact
    createPhysician(name: String!, speciality: String!, email:String!, phone:String!, _id:ID): User
    deletePhysician(_id: ID!): Physician
    createHistory(issue: String!, _id: ID) : User
    deleteHistory(_id: ID!): History
    createSurgery(description: String!, date: String!, hospital: String!, hospitalCity: String!, surgeon: String!, _id: ID) : User
    deleteSurgery(_id: ID!): Surgery
    createPain(onset: String!, provocation: String!, quality: String!, location: String!, severity: Int, timing: String!, _id: ID): User
    deletePain(_id: ID!): Pain
    createEmergency(currentProblem: String!, _id: ID) : User
    deleteEmergency(_id: ID!): Emergency

  }
`;
module.exports = typeDefs;
