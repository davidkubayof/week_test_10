import { connect } from '../DB/mongo.dbConnect.js'

const db = await connect()

export async function creatUserD({username , password}) {
    const obj = {
        username,
        password,
        encryptedMessagesCount: 0 ,
        createdAt: new Date()
    }    
    const objUser = await db.collection("users").findOne({username:username})
        
    if(objUser){
        return "user is alrdy exsis"}

    const {insertedId} = await db.collection("users").insertOne(obj)
    const user = await db.collection("users").findOne({_id:insertedId})
    return user    
}
export async function validUserD({username , password}) {
    const user = await db.collection("users").findOne({username , password})
    return user    
}


