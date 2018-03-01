import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
// import * as BooksAPI from './BooksAPI'
import "./App.css";
import SearchPage from "./SearchPage";
import MainPage from "./MainPage";

const BooksApp = () => {
  return (
    <Router>
      <div className="app">
        <Route exact path="/" component={MainPage} />
        <Route path="/search" component={SearchPage} />
      </div>
    </Router>
  );
};

export default BooksApp;
