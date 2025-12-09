import express from 'express';
import { loginUser, registerUser } from '../controllers/userController.js';
import { getPosts, getPostById } from '../controllers/postController.js';
import { getCommentsByPostId, sendComment } from '../controllers/commentsController.js';

const router = express.Router();

//Usuarios
router.post('/login', loginUser);
router.post('/register', registerUser);
//Posts
router.get('/posts', getPosts);
router.get('/posts/:id', getPostById);
//Comments
router.get('/posts/:id/comments', getCommentsByPostId);
router.post('/posts/comments/post', sendComment);

export default router;