const bookRoutes = require("express").Router();
const Book = require("../models/book");

bookRoutes.get("/", async (request, response) => {
  const books = await Book.find({});
  response.json(books);
});

bookRoutes.get("/:id", async (request, response) => {
  const books = await Book.findById(request.params.id);
  response.json(books);
});

bookRoutes.post("/", async (request, response) => {
  const { title, author, year } = request.body;

  if (title === undefined || title === null) {
    response.status(400).end();
  }

  const book = new Book({
    title,
    author,
    year,
  });

  const savedBook = await book.save();
  response.status(201).json(savedBook);
});

bookRoutes.delete("/:id", async (request, response) => {
  const bookToDelete = await Book.findById(request.params.id);

  if (!bookToDelete) {
    response.status(404).end();
  }

  if (bookToDelete.id === request.params.id) {
    await bookToDelete.remove();
    return response.status(204).end();
  }
});

module.exports = bookRoutes;
