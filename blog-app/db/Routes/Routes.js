import  express from 'express';
const router = express.Router();

const { getAllPosts, createPost } = require('../controler/Controler.js');

router.get('/posts', getAllPosts);
router.post('/posts', createPost);

export default router