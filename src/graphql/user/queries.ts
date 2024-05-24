export const queries = `
type Query 
{
    getUserToken(email:String,password:String):String

    getAllPostOfUser(id:String): GetAllPostOfUser
}
`