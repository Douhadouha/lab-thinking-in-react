import React, { Component } from "react";
import ReactDOM from "react-dom";

import FilterableProductTable from "./FilterableProductTable.js";

class SearchBar extends Component {
  render() {
    return (
      <div className="SearchBar">
        <h1>Search</h1>
        <p input id="searchbar" onkeyup="search_product()" type="text"
        name="search" placeholder="Search products"> </p>
      </div>
    );
  }
}

export default SearchBar;
