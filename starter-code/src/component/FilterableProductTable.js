// Il a deux components enfants search bar et productable
import React, { Component } from "react";
import ReactDOM from "react-dom";
import json from "../data.json";
import ProductTable from "./ProductTable.js";
import SearchBar from "./SearchBar.js";

class FilterableProductTable extends Component {
  state = {
    products: json.data // [ {}, {}, ... ]
  };

  render() {

    return (
      <div className="FilterableProductTable">
        <SearchBar />
        <ProductTable products={this.state.products} />
      </div>
    );
  }
}

export default FilterableProductTable;
