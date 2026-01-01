import supabase from "../DB/supabase.db.js";

export async function messagesEncryptD({message , cipherType ,username}) {

   const revresMessage =  message.split("").reverse().join("").toLocaleLowerCase();
   const objMessage ={
    username:username,
    encrypted_text:revresMessage,
    cipher_type:cipherType
   }
   const {data , error} = await supabase.from("users").insert(objMessage)
   if(error) throw error
   console.log(data);
   
   return data 
    
}



export async function messagesDecryptD({message , cipherType ,username}) {
   const revresMessage =  message.split("").reverse().join("").toLocaleLowerCase();
   const objMessage ={
    username:username,
    encrypted_text:revresMessage,
    cipher_type:cipherType
   }
   const {data , error} = await supabase.from("users").insert(objMessage)
   if(error) throw error
   console.log(data);
   
   return data 
    
}



