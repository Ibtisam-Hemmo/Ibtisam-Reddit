const postsRouter = require('express').Router();
const cookieParser = require("cookie-parser");

const { getPosts, addPost, deletePost, getComments } = require('../controllers/posts/index');

postsRouter.use(cookieParser());

postsRouter.get('/post', getPosts);
postsRouter.get('/homePost', getPosts);
postsRouter.get('/addPost/:post', addPost);
postsRouter.get('/delete/:id', deletePost);
postsRouter.get('/comments', getComments)
module.exports = postsRouter;
