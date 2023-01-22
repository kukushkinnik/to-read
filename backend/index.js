require("dotenv").config();

const Book = require("./models/book");

const express = require("express");
const app = express();
const requestLogger = require("./logger");
const mongoose = require("mongoose");

const uri = process.env.MONGODB_URI;

mongoose
  .connect(uri)
  .then((result) => {
    console.log("connected to MongoDB");
  })
  .catch((error) => {
    console.log(error.message);
  });

app.use(express.json());
app.use(requestLogger);

app.get("/api/books", (request, response) => {
  Book.find({}).then((books) => response.json(books));
});

app.get("/api/books/:id", (request, response) => {
  Book.findById(request.params.id).then((book) => response.json(book));
});

app.delete("/api/books/:id", (request, response) => {
  const id = Number(request.params.id);
  Book.findByIdAndDelete(request.params.id).then(() => {
    response.status(204).end();
  });
});

app.post("/api/books", (request, response) => {
  const { author, title, year } = request.body;

  if (!author) {
    return response.status(400).json({ error: "author is missing" });
  }
  const book = new Book({
    author,
    title,
    year,
  });

  book.save().then((result) => {
    response.status(204).end();
  });
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
