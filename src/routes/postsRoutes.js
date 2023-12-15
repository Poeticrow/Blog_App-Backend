const postsRouter = require("express").Router();
const createPost = require("../Controllers/postControllers/createPost");
const getAllPosts = require("../Controllers/postControllers/getAllPosts");

// ENDPOINTS
postsRouter.get("/", getAllPosts);
postsRouter.get("/", createPost);

module.exports = postsRouter;
