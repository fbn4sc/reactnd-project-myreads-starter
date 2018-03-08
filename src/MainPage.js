import React, { Component } from "react";
import BookShelf from "./BookShelf";
import { Link } from "react-router-dom";
import { getAll } from "./BooksAPI";

class MainPage extends Component {
  state = {
    books: []
  };

  componentDidMount() {
    getAll().then(books => this.setState({ books }));
  }

  render() {
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <BookShelf
              shelfTitle="Currently Reading"
              books={this.state.books.filter(
                b => b.shelf === "currentlyReading"
              )}
            />
            <BookShelf
              shelfTitle="Want to Read"
              books={this.state.books.filter(b => b.shelf === "wantToRead")}
            />
            <BookShelf
              shelfTitle="Read"
              books={this.state.books.filter(b => b.shelf === "read")}
            />
          </div>
        </div>
        <div className="open-search">
          <Link to="/search">Add a book</Link>
        </div>
      </div>
    );
  }
}

export default MainPage;
