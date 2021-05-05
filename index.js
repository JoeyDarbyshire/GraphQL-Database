const { ApolloServer, gql } = require('apollo-server');
const resolvers = require('./server/resolvers');
const typeDefs = require('./server/schema')
const models = require('./server/models')


// Apollo Server
const server = new ApolloServer({ 
    typeDefs, 
    resolvers,
    context: {
        models
    }
 });

// Server start
server.listen().then(({ url }) => {
    console.log(`Server started and running at ${url}`)
})