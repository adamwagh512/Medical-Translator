const { gql } = require('apollo-server-express');

const typeDefs = gql`
type Account {
    _id: ID
    email: String
    password: String
    users: [Users]
}

type Users {
    firstName: String
    lastName: String
    DOB: String
    smoker: Boolean
}
`;

module.exports = typeDefs