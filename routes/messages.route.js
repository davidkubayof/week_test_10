import express from 'express'
import { validUserM } from '../middleware/middlewareUser.js';
import { messagesEncryptC , messagesDecryptC } from '../ctrls/messagesC.js';

const router = express.Router();

router.post('/messages/encrypt',validUserM , messagesEncryptC)

router.post('/messages/decrypt',validUserM , messagesDecryptC)

//bonos not end
router.get('/messages',validUserM,(req ,res)=>{res.status(200)})
export default router;