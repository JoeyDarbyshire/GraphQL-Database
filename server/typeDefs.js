const { gql } = require('apollo-server');


// Graph QL Query to request books
const typeDefs = gql`
type Book {
    title: String
    author: String
}

type Query {
    books: [Book]
}
`

module.exports = {
    typeDefs
}