const express = require("express");
require("dotenv").config();
const cors = require("cors");
const postsRouter = require("./src/routes/postsRoutes");
const { PORT, MONGODB_URL } = require("./src/configs/constants");
const mongoose = require("mongoose");

// FUNCTION CALLS
const app = express();
app.use(express.json());
app.use(cors());

const port = PORT || 8080;
// TEST ENDPOINT
app.get("/api/", (req, res) => {
  return res.status(200).json({
    message: "Welcome to my Blog Api",
  });
});

app.use("/api/post", postsRouter);
// app.use("/api/user", userRoutes);
app.use("*", (req, res) => {
  return res.status(404).json({ error: "Route not found", statusText: "fail" });
});

mongoose
  .connect(MONGODB_URL)
  .then((data) => {
    console.log("Database connected...");
    app.listen(port, () => {
      console.log(`App running on port ${port}`);
    });
  })
  .catch((err) => {
    console.error(err);
  });
