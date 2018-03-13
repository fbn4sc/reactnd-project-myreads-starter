import React, { Component } from "react";
import { Link } from "react-router-dom";
import { search } from "./BooksAPI";
import Book from "./Book";

class SearchPage extends Component {
  state = { searchTerm: "", searchedBooks: [] };

  compareAndUpdateResults = fetchedBooks => {
    for (let b of this.props.books) {
      fetchedBooks.map((fb, i) => {
        if (fb.id === b.id) {
          fb.shelf = b.shelf;
          fetchedBooks[i] = fb;
        }
      });
    }

    fetchedBooks = fetchedBooks.map(fb => {
      if (!fb.shelf) fb.shelf = "none";
      return fb;
    });

    return fetchedBooks;
  };

  handleSearch = e => {
    const searchTerm = e.target.value;

    if (searchTerm)
      search(searchTerm).then(results => {
        if (results.error)
          this.setState({
            searchedBooks: [],
            error: "No books match your query."
          });
        else
          this.setState({
            searchedBooks: this.compareAndUpdateResults(results)
          });
      });
    else this.setState({ searchedBooks: [], error: "" });
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
            {this.state.searchedBooks.map((book, i) => (
              <li key={i}>
                <Book
                  book={book}
                  handleBookUpdate={this.props.handleBookUpdate}
                />
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
