import express from 'express'
import { handleRefreshAccessToken, handleUserLogin, handleUserLogout, handleUserSignUp } from '../controllers/auth/user.controller';
import { userLoginValidator, userRegistrationValidator } from '../validators/user.validators';
import { validate } from '../validators/validate';

const router = express.Router();

router.post('/login', userLoginValidator(), validate, handleUserLogin);
router.post('/register', userRegistrationValidator(), validate, handleUserSignUp);
router.post('/logout', handleUserLogout);
router.post('/refresh-token', handleRefreshAccessToken);