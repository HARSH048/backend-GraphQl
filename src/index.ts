import express, { Application, Request, Response } from "express";
import bodyParser from "body-parser";
import { expressMiddleware } from '@apollo/server/express4';
import createGraphQlServer from "./graphql";

  // const resolvers = {
  //   Query: {
  //     user: async(_:any,{firstName}:{firstName:string}) => {
  //       try {
  //         console.log(firstName)
  //         const users = await prisma.user.findFirst({
  //           where: {
  //             firstName: { equals: firstName }
  //           }
  //         });
  //         console.log(users)
  //         return users;
  //       } catch (error) {
  //         console.error('Error occurred:', error);
  //         // Handle the error, e.g., return an error response
  //       }
        
  //     },
  //   },
  //   Mutation: {
  //     createUser: async (_:any,
  //       {firstName,lastName,email,password}:
  //       {firstName:string,lastName:string,email:string,password:string}) => {
  //       await prisma.user.create({
  //         data: {
  //           email,
  //           firstName,
  //           lastName,
  //           password,
  //           salt:'Nothing'
  //         }
  //       })
  //       return true;
  //     }
  //   }
  // }
  async function startServer(){
    const app: Application = express();
    const server = await createGraphQlServer();
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));

    app.use('/graphql',express.json(), expressMiddleware(server));
    const PORT = process.env.PORT || 9000;
    
    app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`);
    });
  }

startServer()