// component enfant = product row

import React, { Component } from "react";
import json from "../data.json";
import ReactDOM from "react-dom";
import FilterableProductTable from "./FilterableProductTable.js";
import ProductRow from "./ProductRow.js";

class ProductTable extends Component {
  render() {
    return (
      <table>
        <thead>
          <tr>
            <th>Name </th>
            <th>Price</th>
          </tr>
        </thead>
        {
          <tbody>
            <ProductRow />
            {this.props.products.map((product, index) => {
              return (
                <tr key={index}>
                  <td>{product.name}</td>
                  <td>{product.price}</td>
                </tr>
              );
            })}
          </tbody>
        }
      </table>
    );
  }
}

export default ProductTable;
