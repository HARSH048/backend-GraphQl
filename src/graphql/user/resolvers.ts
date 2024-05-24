import createUser from "src/lib/interface/create-user"
import UserService  from "../../service/user.service"
import getJwtToken from "src/lib/interface/get-token"

const queries = {
   getUserToken: (_:any,payload:getJwtToken)=>{
    return UserService.getJwtToken(payload)
   },

   getAllPostOfUser:(_:any,payload:any)=>{return UserService.getAllPostOfUser(payload)}
}
const mutation = {
    createUser:(_:any,payload:createUser)=>{ return UserService.createUser(payload)}
}
export const resolvers = {queries,mutation}