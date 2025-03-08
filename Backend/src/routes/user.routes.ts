import express from 'express'
import { handleUserLogin } from '../controllers/user.controller';

const router = express.Router();

router.get('/login', handleUserLogin);