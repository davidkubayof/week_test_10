import { creatUserD } from "../DAL/mongoDB.users.js";

export async function creatUserC(req, res) {
  try {
    if(!req.body.username || !req.body.password) {
      return res.status(400).send("body canot be empty");
    }
    const result = await creatUserD(req.body);
    const {_id ,username} = result
    const  userAndID = {_id ,username}
    if(!_id||!username){
      return res.send(result)
    }
    res.json(userAndID);
  } catch (error) {
    res.status(500).send(error)
  }
}
export async function loginC(req, res) {
  try {
    const {username ,encryptedMessagesCount} = req.user
    const  userAndEMC = {username ,encryptedMessagesCount}
    res.status(200).json(userAndEMC)  
  } catch (error) {
    res.status(500).send(error)
  }
}