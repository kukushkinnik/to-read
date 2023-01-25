import React from "react";

const BookForm = ({
  updAuthor,
  author,
  updTitle,
  title,
  updYear,
  year,
  addBook,
}) => {
  return (
    <div className="font-mono text-white p-8">
      <form onSubmit={addBook}>
        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          Author:
        </label>
        <input
          type="text"
          value={author}
          onChange={updAuthor}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
        <br></br>
        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          Title:
        </label>
        <input
          type="text"
          value={title}
          onChange={updTitle}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
        <br></br>
        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          Year:
        </label>
        <input
          type="text"
          year={year}
          onChange={updYear}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
        <br></br>
        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default BookForm;
