import React from "react";
import Book from "./Book";

const BookShelf = props => {
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{props.shelfTitle}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {props.books.map(b => (
            <li key={b.id}>
              <Book book={b} handleBookUpdate={props.handleBookUpdate} />
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default BookShelf;
