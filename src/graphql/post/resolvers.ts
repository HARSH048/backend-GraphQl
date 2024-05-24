import {createPost} from '../../lib/interface/create-post'
import PostService from '../../service/post.service'
const queries = {
    async getAllPosts(_:any){
        return await PostService.getAllPosts()
    },
    async getPostById(_:any,{id}:{id:string}){
        return await PostService.getPostById(id)
    }
}
const mutation = {
   async createPost(_:any,payload:createPost){
     return await PostService.createPost(payload)
    }
}

export const resolvers = {queries,mutation}