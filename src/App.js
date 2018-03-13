import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import SearchPage from "./SearchPage";
import MainPage from "./MainPage";
import * as BooksApi from "./BooksAPI";

class BooksApp extends Component {
  state = {
    books: []
  };

  componentDidMount() {
    BooksApi.getAll().then(books => this.setState({ books }));
  }

  updateBook = updatedBook => {
    const bookIndex = this.state.books.findIndex(b => b.id === updatedBook.id);
    const books = this.state.books.slice();
    books[bookIndex] = updatedBook;

    BooksApi.update(updatedBook, updatedBook.shelf);
    this.setState({ books });
  };

  render() {
    return (
      <Router>
        <div className="app">
          <Route exact path="/" component={MainPage} />
          <Route
            path="/search"
            render={() => <SearchPage books={this.state.books} />}
          />
        </div>
      </Router>
    );
  }
}

export default BooksApp;
