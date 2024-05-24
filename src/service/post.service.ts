import {createPost} from '../lib/interface/create-post'
import prisma from '../lib/db'

class PostService{
    
    public static async createPost(payload:createPost){
        await prisma.post.create({data:payload});
        return "successfully created";
    }

    public static async getAllPosts(){
       return await prisma.post.findMany()
    }

    public static async getPostById(id:string){
        return await prisma.post.findUnique({where:{id}})
     }
}

export default PostService;