import { ApolloServer } from "@apollo/server";
import { User } from "./user";


async function createGraphQlServer(){
    const server = new ApolloServer({
        typeDefs:`
        ${User.queries}
        ${User.mutation}
        `,
        resolvers:{
            Query:{
               ...User.resolvers.queries
            },
            Mutation:{
                ...User.resolvers.mutation
            }
        },
      });
    
     await server.start();
     return server
}

export default createGraphQlServer;