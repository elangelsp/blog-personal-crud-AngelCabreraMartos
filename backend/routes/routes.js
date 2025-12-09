import express from 'express';
import { getPosts, loginUser, registerUser } from '../controllers/userServices.js';

const router = express.Router();

//Usuarios
router.post('/login', loginUser);
router.post('/register', registerUser);
//Posts
router.get('/posts', getPosts);

export default router;