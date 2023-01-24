import React from "react";

const BooksList = ({ books, deleteBook, option }) => {
  return (
    <div>
      <ul>
        {books.map((book) => {
          return (
            <li key={book.id}>
              {book.author}, {book.title}, {book.year}
              <select onChange={(e) => option(book.id, e)}>
                <option value="Not Read" selected>
                  Not Read
                </option>
                <option value="Reading">Reading</option>
                <option value="Complete">Complete</option>
              </select>
              <button onClick={() => deleteBook(book.id)}>Delete</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default BooksList;
