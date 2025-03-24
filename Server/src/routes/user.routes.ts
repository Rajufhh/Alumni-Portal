import express from 'express'
import { handleGetUserProfile, handleRefreshAccessToken, handleUserLogin, handleUserLogout, handleUserSignUp } from '../controllers/auth/user.controller';
import { userLoginValidator, userRegistrationValidator } from '../validators/user.validators';
import { validate } from '../validators/validate';
import { verifyJWT } from '../middlewares/auth/user.middlewares';

const router = express.Router();

router.post('/login', userLoginValidator(), validate, handleUserLogin);
router.post('/signup', userRegistrationValidator(), validate, handleUserSignUp);
router.post('/logout', verifyJWT, handleUserLogout);
router.post('/refresh-token', handleRefreshAccessToken);

router.get('/user/profile', verifyJWT, handleGetUserProfile);

export default router;