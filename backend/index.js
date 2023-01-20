const http = require("http");
const express = require("express");
const app = express();

app.use(express.json());

const books = [
  { id: 1, author: "Test", title: "Test", year: 2001 },
  { id: 2, author: "Test", title: "Test", year: 2001 },
];

const generateId = () => {
  const maxId = books.length > 0 ? Math.max(...books.map((b) => b.id)) : 0;
  return maxId + 1;
};

app.get("/api/books", (request, response) => {
  response.json(books);
});

app.get("/api/books/:id", (request, response) => {
  const id = +request.params.id;
  const book = books.find((book) => book.id === id);

  response.json(book);
});

app.delete("/api/books/:id", (request, response) => {
  const id = Number(request.params.id);
  books = books.filter((book) => book.id !== id);
  response.status(204).end();
});

app.post("api/books", (request, response) => {
  const { author, title, year } = request.body;
  if (!body.author) {
    return response.status(400).json({ error: "author is missing" });
  }
  const newBook = {
    id: generateId(),
    author,
    title,
    year,
  };
  books = books.concat(newBook);
  reponse.json(books);
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
