import express from 'express'
import { creatUserC, loginC } from '../ctrls/userC.js';
import { validUserM } from '../middleware/middlewareUser.js';
// import { creatUserC , getAllUsersC, eqOrBigerC , updatUserC ,  deletUserC , getByIdC} from '../ctrls/userC.js';

const router = express.Router();

router.post('/auth/register', creatUserC)
router.get('/users/me', validUserM , loginC)
export default router;