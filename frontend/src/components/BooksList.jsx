import React from "react";

const BooksList = ({ books, deleteBook }) => {
  return (
    <div>
      <ul>
        {books.map((book) => {
          return (
            <li key={book.id}>
              {book.author}, {book.title}, {book.year}
              <input type="checkbox"></input>
              <button onClick={() => deleteBook(book.id)}>Delete</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default BooksList;
