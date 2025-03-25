import express from 'express'
import { handleDeleteUser, handleFetchAllAlumniProfiles, handleFetchAllStudentProfiles, handleGetProfileById, handleGetUserProfile, handleRefreshAccessToken, handleUpdateAccountDetails, handleUserLogin, handleUserLogout, handleUserSignUp } from '../controllers/auth/user.controller';
import { userLoginValidator, userRegistrationValidator } from '../validators/user.validators';
import { validate } from '../validators/validate';
import { verifyJWT } from '../middlewares/auth/user.middlewares';

const router = express.Router();

router.post('/login', userLoginValidator(), validate, handleUserLogin);
router.post('/signup', userRegistrationValidator(), validate, handleUserSignUp);
router.post('/logout', verifyJWT, handleUserLogout);
router.post('/refresh-token', handleRefreshAccessToken);

router.get('/user/profile', verifyJWT, handleGetUserProfile);
router.get('/user/profile/alumni', verifyJWT, handleFetchAllAlumniProfiles);
router.get('/user/profile/student', verifyJWT, handleFetchAllStudentProfiles);
router.get('/user/profile/:id', verifyJWT, handleGetProfileById);
router.delete('/user/:id', verifyJWT, handleDeleteUser);
router.put('/user/profile', verifyJWT, handleUpdateAccountDetails);

export default router;