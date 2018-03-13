import React, { Component } from "react";
import BookShelf from "./BookShelf";
import { Link } from "react-router-dom";

class MainPage extends Component {
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
              books={this.props.books.filter(
                b => b.shelf === "currentlyReading"
              )}
              handleBookUpdate={this.props.handleBookUpdate}
            />
            <BookShelf
              shelfTitle="Want to Read"
              books={this.props.books.filter(b => b.shelf === "wantToRead")}
              handleBookUpdate={this.props.handleBookUpdate}
            />
            <BookShelf
              shelfTitle="Read"
              books={this.props.books.filter(b => b.shelf === "read")}
              handleBookUpdate={this.props.handleBookUpdate}
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
