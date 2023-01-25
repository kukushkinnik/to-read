import React from "react";

const BooksList = ({ books, deleteBook, option }) => {
  return (
    <div>
      <ul>
        {books.map((book) => {
          return (
            <li
              key={book.id}
              className="max-w-md space-y-1 text-white list-none list-inside dark:text-white"
            >
              <div>
                {book.author}, {book.title}, {book.year}
                {"   "}
                {book.status === "Not Read" && (
                  <select
                    onChange={(e) => option(book.id, e)}
                    className=" mb-6 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  >
                    <option value="Not Read" selected>
                      Not Read
                    </option>
                    <option value="Reading">Reading</option>
                    <option value="Complete">Complete</option>
                  </select>
                )}
                {book.status === "Reading" && (
                  <select
                    onChange={(e) => option(book.id, e)}
                    className="   mb-6 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  >
                    <option value="Not Read">Not Read</option>
                    <option value="Reading" selected>
                      Reading
                    </option>
                    <option value="Complete">Complete</option>
                  </select>
                )}
                {book.status === "Complete" && (
                  <select
                    onChange={(e) => option(book.id, e)}
                    className="mb-6 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  >
                    <option value="Not Read">Not Read</option>
                    <option value="Reading">Reading</option>
                    <option value="Complete" selected>
                      Complete
                    </option>
                  </select>
                )}
                {"   "}
                <button
                  onClick={() => deleteBook(book.id)}
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                >
                  Delete
                </button>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default BooksList;
