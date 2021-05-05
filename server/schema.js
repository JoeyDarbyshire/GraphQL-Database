const { gql } = require('apollo-server');


// Graph QL Query to request books
const typeDefs = gql`
type Book {
    title: String
    author: Author
}

type Author {
    name: String
    books: [Book]
}

type Query {
    books: [Book]
    authors: [Author]
}

type Mutation {
    createBook(title: String!, authorName: String!): Book!
    createAuthor(name: String!): Author!
}
`

module.exports = typeDefs