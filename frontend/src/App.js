import React, { useEffect, useState } from "react";
import BookForm from "./components/BookForm";
import BooksList from "./components/BooksList";
import bookService from "./services/books";

function App() {
  const [books, setBooks] = useState([]);
  const [author, setAuthor] = useState("");
  const [title, setTitle] = useState("");
  const [year, setYear] = useState(0);
  const [notRead, setNotRead] = useState(0);
  const [reading, setReading] = useState(0);
  const [completed, setCompleted] = useState(0);
  const [showStats, setShowStats] = useState(false);
  const [status, setStatus] = useState("Not Read");
  const [showFormAddBook, setShowFormAddBook] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const data = await bookService.getAll();
      setBooks(data);
    };
    fetchData();
  }, []);

  function addBook(e) {
    e.preventDefault();

    const newBook = {
      author: author,
      title: title,
      year: year,
      status: status,
    };

    bookService
      .create(newBook)
      .then((returnedBooks) => {
        setBooks(books.concat(returnedBooks));
        setAuthor("");
        setTitle("");
        setYear();
      })
      .catch((error) => {
        console.log(error.response.data);
      });
  }

  function updateBook(id, status) {
    const book = books.find((book) => book.id === id);
    const updatedBook = { ...book, status: status };
    bookService.update(id, updatedBook).then((returnedBook) => {
      setBooks(books.map((book) => (book.id !== book ? book : returnedBook)));
    });
  }

  function showStatistics() {
    setShowStats(!showStats);
  }

  function showAddBook() {
    setShowFormAddBook(!showFormAddBook);
  }

  function deleteBook(id) {
    const book = books.find((book) => book.id === id);
    const deletedBook = window.confirm(`Do you wish to delete ${book.title}`);

    if (deletedBook) {
      bookService.deleteBook(id).then((deleted) => {
        setBooks(books.filter((person) => person.id !== id));
      });
    }
  }

  function updateAuthor(e) {
    setAuthor(e.target.value);
  }

  function updateTitle(e) {
    setTitle(e.target.value);
  }

  function updateYear(e) {
    setYear(e.target.value);
  }

  function option(id, event) {
    if (event.target.value === "Not Read") {
      setNotRead(notRead + 1);
    }
    if (event.target.value === "Reading") {
      setReading(reading + 1);
      setStatus(event.target.value);
      updateBook(id, event.target.value);
    }
    if (event.target.value === "Complete") {
      setCompleted(completed + 1);
      setNotRead(notRead - 1);
      updateBook(id, event.target.value);
    }
  }

  return (
    <div className="App">
      <h1>To Read!</h1>

      <h2>Let's add some books!</h2>

      <button onClick={showAddBook}>Add Book</button>
      {showStats && (
        <div>
          <h2>Statistics</h2>
          <p>Not Read: {notRead}</p>
          <p>Reading: {reading}</p>
          <p>Read: {completed}</p>
        </div>
      )}

      {showFormAddBook && (
        <BookForm
          updAuthor={updateAuthor}
          author={author}
          updTitle={updateTitle}
          title={title}
          updYear={updateYear}
          year={year}
          addBook={addBook}
        />
      )}
      <button onClick={showStatistics}>Statistics</button>

      <BooksList books={books} deleteBook={deleteBook} option={option} />
    </div>
  );
}

export default App;
