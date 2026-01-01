import { messagesEncryptD } from "../DAL/supabaseDB.massages.js"

export async function messagesEncryptC(req,res) {
    if(!req.body.cipherType || req.body.message){
        return res.status(400).send("body canot be empty")
    }
    const result = await messagesEncryptD(req.body)

    const obj = {
        _id: req.user._id,
        cipherType: req.body.cipherType,
        encryptedText: "NWAD TA KCATTA"
    }
    res.json(obj)
}




export async function messagesDecryptC(req, res) {
    res.json("")
    
}