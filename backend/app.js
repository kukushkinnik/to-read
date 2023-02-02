require("dotenv").config();
const mongoose = require("mongoose");
const requestLogger = require("./utils/middleware");
const express = require("express");
const bookRoutes = require("./controllers/book");
const { MONGODB_URI } = require("./utils/config");
const app = express();

mongoose
  .connect(MONGODB_URI)
  .then((result) => {
    console.log("connected to MongoDB");
  })
  .catch((error) => {
    console.log(error.message);
  });

app.use(express.json());
app.use(requestLogger);
app.use("/api/books", bookRoutes);

module.exports = app;
