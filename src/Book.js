import React from "react";

const Book = props => {
  const dynamicStyle = {};
  if (props.book.imageLinks)
    dynamicStyle.backgroundImage = `url(${props.book.imageLinks.thumbnail})`;
  else dynamicStyle.background = "#cccccc88";

  return (
    <div className="book">
      <div className="book-top">
        <div
          className="book-cover"
          style={{
            width: 128,
            height: 193,
            ...dynamicStyle
          }}
        />
        <div className="book-shelf-changer">
          <select
            value={props.book.shelf}
            onChange={e => {
              const book = props.book;
              book.shelf = e.target.value;
              props.handleBookUpdate(book);
            }}
          >
            <option value="none" disabled>
              Move to...
            </option>
            <option value="currentlyReading">Currently Reading</option>
            <option value="wantToRead">Want to Read</option>
            <option value="read">Read</option>
            <option value="none">
              {`${props.book.shelf === "none" ? "✓ " : ""}None`}
            </option>
          </select>
        </div>
      </div>
      <div className="book-title">{props.book.title}</div>
      <div className="book-authors">
        {props.book.authors &&
          props.book.authors.map((a, i) => <div key={i}>{a}</div>)}
      </div>
    </div>
  );
};

export default Book;
