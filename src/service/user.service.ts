import createUser from '../lib/interface/create-user'
import prisma from '../lib/db'
import {createHmac,randomBytes} from 'node:crypto'
import getJwtToken from '../lib/interface/get-token';
import Jwt from 'jsonwebtoken'
const secret = 'your-secret-key';

class UserService {
    public static async createUser(payload:createUser){
        const {email,password,firstName,lastName}=payload;
        const salt=randomBytes(32).toString('hex');
        const hashedPassword=createHmac('sha256',salt).update(password).digest('hex')
       await prisma.user.create({
                    data: {
                      email,
                      firstName,
                      lastName,
                      password:hashedPassword,
                      salt
                    }
                  })
        return "successfully created";
    }

    public static getHashPassword(salt:string,password:string){
      const hashedPassword=createHmac('sha256',salt).update(password).digest('hex')
      return hashedPassword;
    }

    public static async getJwtToken(payload:getJwtToken){
      const {email,password}=payload;
      const user=await prisma.user.findUnique({where:{email}});

      if(!user) throw new Error('user does not exist')

     const hashedPassword= await UserService.getHashPassword(user.salt,password)
     if(user.password !== hashedPassword)
      throw new Error('wrong password')

    const token= Jwt.sign({email,password},secret);
    return token;
    }
}

export default UserService;