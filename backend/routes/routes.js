import express from 'express';
import { loginUser, registerUser } from '../controllers/userController.js';
import { getPosts, getPostById, getPostsByAuthorId, editPosts, deletePosts, crearPost } from '../controllers/postController.js';
import { getCommentsByPostId, sendComment } from '../controllers/commentsController.js';
import { getAllTags } from '../controllers/tagsController.js';

const router = express.Router();

//Usuarios
router.post('/login', loginUser);
router.post('/register', registerUser);
//Posts
router.get('/posts', getPosts);
router.get('/posts/:id', getPostById);
router.get('/posts/author/:id', getPostsByAuthorId);
router.put('/posts/edit/:id', editPosts);
router.delete('/posts/delete/:id', deletePosts)
router.post('/posts/crear', crearPost)
//Comments
router.get('/posts/:id/comments', getCommentsByPostId);
router.post('/posts/comments/post', sendComment);
//Tags
router.get('/tags', getAllTags)

export default router;