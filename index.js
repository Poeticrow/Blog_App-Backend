const express = require("express");
require("dotenv").config();
const cors = require("cors");
const connectDB = require("./db");
const postsRouter = require("./src/routes/postsRoutes");
const { PORT } = require("./src/configs/constants");

// FUNCTION CALLS
const app = express();
app.use(express.json());
connectDB();
app.use(cors());

const port = PORT || 8080;
// TEST ENDPOINT
app.get("/api/", (req, res) => {
  return res.status(200).json({
    message: "Welcome to my backend App",
  });
});

app.use("/api/post", postsRouter);
// app.use("/api/user", userRoutes);
app.use("*", (req, res) => {
  return res.status(404).json({ error: "Route not found", statusText: "fail" });
});

app.listen(port, () => {
  console.log(`App running on port ${port}`);
});
