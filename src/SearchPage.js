import React, { Component } from "react";
import { Link } from "react-router-dom";
import { search } from "./BooksAPI";
import Book from "./Book";

class SearchPage extends Component {
  state = { searchTerm: "", books: [] };

  handleSearch = e => {
    const searchTerm = e.target.value;

    if (searchTerm)
      search(searchTerm).then(result => {
        if (result.error)
          this.setState({ books: [], error: "No books match your query." });
        else this.setState({ books: result });
      });
    else this.setState({ books: [], error: "" });
  };

  render() {
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to="/" className="close-search">
            Close
          </Link>
          <div className="search-books-input-wrapper">
            <input
              type="text"
              placeholder="Search by title or author"
              onChange={this.handleSearch}
            />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {this.state.books.map((book, i) => (
              <li key={i}>
                <Book book={book} />
              </li>
            ))}
          </ol>
          {this.state.error && (
            <div
              style={{
                textAlign: "center"
              }}
            >
              {this.state.error}
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default SearchPage;
