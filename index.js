const { ApolloServer, gql } = require('apollo-server')

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

// Example dataset for the database
const books = [
    {
        title: 'Whaddo you mean?',
        author: 'Tim Stroodle'
    },
    {
        title: 'Nice Dogs',
        author: 'Kelly Hayes'
    }
]

// GraphQL server definition
const resolvers = {
    Query: {
        books: () => books,
    }
}


// Apollo Server
const server = new ApolloServer({ typeDefs, resolvers });

// Server start
server.listen().then(({ url }) => {
    console.log(`Server started and running at ${url}`)
})