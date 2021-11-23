const { gql } = require('apollo-server-express');

const typeDefs = gql `
    type Query {
        me: User
    }

    type Mutation {
        login(email: String!, password: String!): Auth
    }

`;

module.exports = typeDefs;