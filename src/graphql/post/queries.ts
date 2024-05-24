export const queries = `
type Query {
   getAllPosts: [Post]
   getPostById(id:String): Post
}
`