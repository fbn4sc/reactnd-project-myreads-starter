import React, { Component } from "react";
import BookShelf from "./BookShelf";
import { Link } from "react-router-dom";
import { getAll, update } from "./BooksAPI";

class MainPage extends Component {
  state = {
    books: []
  };

  componentDidMount() {
    getAll().then(books => this.setState({ books }));
  }

  updateBook = updatedBook => {
    const bookIndex = this.state.books.findIndex(b => b.id === updatedBook.id);
    const books = this.state.books.slice();
    books[bookIndex] = updatedBook;

    update(updatedBook, updatedBook.shelf);
    this.setState({ books });
  };

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
              handleBookUpdate={this.updateBook}
            />
            <BookShelf
              shelfTitle="Want to Read"
              books={this.state.books.filter(b => b.shelf === "wantToRead")}
              handleBookUpdate={this.updateBook}
            />
            <BookShelf
              shelfTitle="Read"
              books={this.state.books.filter(b => b.shelf === "read")}
              handleBookUpdate={this.updateBook}
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
