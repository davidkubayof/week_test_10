import { validUserD } from "../DAL/mongoDB.users.js"

export async function validUserM(req,res,next) {
    try {
        if(!req.headers.username || !req.headers.password){
           return res.status(400).json("not enter username or password:")
        } 
        
        const user = await validUserD(req.headers)
        if(!user||false){
            return res.status(404).json("user not exsis or password not corcat")    
        }
        req.user = user
        next()
    } catch (error) {
        return res.status(500).json(error , "Internal server error");
    }
}


