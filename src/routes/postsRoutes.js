const postsRouter = require("express").Router();
const createPost = require("../Controllers/postControllers/createPost");
const deletePost = require("../Controllers/postControllers/deletePost");
const getAllPosts = require("../Controllers/postControllers/getAllPosts");
const updatePost = require("../Controllers/postControllers/updatePost");

// ENDPOINTS
postsRouter.get("/", getAllPosts);
postsRouter.post("/", createPost);
postsRouter.delete("/:postId", deletePost);
postsRouter.put("/:postId", updatePost);

module.exports = postsRouter;
