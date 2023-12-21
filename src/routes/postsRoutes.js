const postsRouter = require("express").Router();
const createPost = require("../Controllers/postControllers/createPost");
const deletePost = require("../Controllers/postControllers/deletePost");
const getAllPosts = require("../Controllers/postControllers/getAllPosts");
const getOnepost = require("../Controllers/postControllers/getOnepost");
const updatePost = require("../Controllers/postControllers/updatePost");
const userAuthentication = require("../Middleware/userAuthentication");
// ENDPOINTS
postsRouter.get("/", getAllPosts);
// postsRouter.post("/", createPost);
postsRouter.post("/", userAuthentication, createPost);
postsRouter.get("/:postId", getOnepost);
postsRouter.delete("/:postId", deletePost);
postsRouter.put("/:postId", updatePost);

module.exports = postsRouter;
