import React, { useEffect, useState } from "react";
import BookForm from "./components/BookForm";
import BooksList from "./components/BooksList";
import bookService from "./services/books";

function App() {
  const [books, setBooks] = useState([]);
  const [author, setAuthor] = useState("");
  const [title, setTitle] = useState("");
  const [year, setYear] = useState(0);
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
    showAddBook();
  }

  function updateBook(id, status) {
    const book = books.find((book) => book.id === id);
    const updatedBook = { ...book, status: status };
    bookService.update(id, updatedBook).then((returnedBook) => {
      setBooks(books.map((book) => (book.id !== book ? book : returnedBook)));
    });
  }

  function showAddBook(e) {
    setShowFormAddBook(!showFormAddBook);
  }

  function deleteBook(id) {
    const book = books.find((book) => book.id === id);
    const deletedBook = window.confirm(`Do you wish to delete ${book.title}`);

    if (deletedBook) {
      bookService.deleteBook(id).then((deleted) => {
        setBooks(books.filter((book) => book.id !== id));
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
      setStatus(event.target.value);
      updateBook(id, event.target.value);
    }

    if (event.target.value === "Reading") {
      setStatus(event.target.value);
      updateBook(id, event.target.value);
    }

    if (event.target.value === "Complete") {
      updateBook(id, event.target.value);
    }
  }

  return (
    <div className="App bg-gray-700  h-screen w-screen p-8 ">
      <div className="container mx-auto">
        <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
          To Read!
        </h1>

        <h2 className="ftext-lg font-medium text-gray-900 dark:text-white">
          Let's add some books!
        </h2>

        <button
          onClick={showAddBook}
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        >
          Add Book
        </button>

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

        <BooksList books={books} deleteBook={deleteBook} option={option} />
      </div>
    </div>
  );
}

export default App;
