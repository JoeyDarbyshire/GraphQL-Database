const { ApolloServer, gql } = require('apollo-server');
const { resolvers } = require('./server/resolvers');
const { typeDefs } = require('./server/typeDefs')


// Apollo Server
const server = new ApolloServer({ typeDefs, resolvers });

// Server start
server.listen().then(({ url }) => {
    console.log(`Server started and running at ${url}`)
})