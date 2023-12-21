const login = require("../controllers/authControllers/loginUser");
const registerUser = require("../controllers/authControllers/registerUser");

const authRouter = require("express").Router();

authRouter.post("/", registerUser);
authRouter.post("/login", login);

module.exports = authRouter;
