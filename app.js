// require("dotenv").config();
const express = require("express");
const app = express();

const PORT = process.env.port || 3000;

const products_routes = require("./routes/products");

// const db = require("./db/connect");
// const connectDB = require("./db/connect");

app.get("/", (req, res) => {
  res.send("Hi im Live");
});

app.use("/api/products", products_routes);

const start = async () => {
  try {
    // await connectDB(process.env.MONGO_DB_URL);
    app.listen(PORT, () => {
      console.log(`${PORT} yes I am connected`);
    });
  } catch (error) {
    console.error();
  }
};

start();
