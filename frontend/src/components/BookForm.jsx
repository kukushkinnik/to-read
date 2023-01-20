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
    <div>
      <form onSubmit={addBook}>
        <label>Author:</label>
        <input type="text" value={author} onChange={updAuthor} />
        <br></br>
        <label>Title:</label>
        <input type="text" value={title} onChange={updTitle} />
        <br></br>
        <label>Year:</label>
        <input type="text" year={year} onChange={updYear} />
        <br></br>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default BookForm;
