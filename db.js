const mongoose = require("mongoose");
const { MONGO_URL } = require("./src/configs/constants");
require("dotenv").config();

const URL = process.env.MONGODB_URL;

const connectDB = async () => {
  await mongoose.connect(URL).then(() => console.log("MongoDB Connected..."));
};

module.exports = connectDB;
