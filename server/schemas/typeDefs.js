const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    password: String
    vehicleInfo: [Vehicle]
    destinations: [Destination]
  }

  type Vehicle {
    name: String
    make: String
    model: String
    mpg: Int
    color: String
    carType: String
  }

  type Destination {
    location: String
    city: String
    streetAddress: String
    zipcode: Int
    state: String
    fullAddress: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]
    user(username: String!): user
    me: User
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;
