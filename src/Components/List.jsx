import { render } from "@testing-library/react";
import React, { Component } from "react";

class List extends Component {
  render() {
    return (
      <div className="ListMain">
        <div className="header">
          <form>
            <input></input>
            <button type="submit">Add</button>
          </form>
          <form onSubmit={this.addItem} />
        </div>
      </div>
    );
  }
}

export default List;
