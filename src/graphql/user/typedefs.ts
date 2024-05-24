export const typeDefs = `
type User{
    id:String
    email:String
    FirstName:String
    LastName:String
}
type GetAllPostOfUser {
    id: String
    firstName: String
    posts: [Post]
}
`