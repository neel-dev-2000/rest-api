require("dotenv").config();
const mongoose = require("mongoose");

const connectDB = () => {
  console.log("connected db");
  return mongoose.connect(process.env.MONGO_DB_URL);
};

module.exports = connectDB;
