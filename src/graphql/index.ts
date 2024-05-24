import { ApolloServer } from "@apollo/server";
import { User } from "./user";
import { Post } from "./post";


async function createGraphQlServer(){
    const server = new ApolloServer({
      typeDefs: `
        ${Post.typeDefs}
        ${User.typeDefs}
        ${User.queries}
        ${User.mutation}
        ${Post.mutation}
        ${Post.queries}
        `,
      resolvers: {
        Query: {
          ...User.resolvers.queries,
          ...Post.resolvers.queries,
        },
        Mutation: {
          ...User.resolvers.mutation,
          ...Post.resolvers.mutation,
        },
      },
    });
    
     await server.start();
     return server
}

export default createGraphQlServer;