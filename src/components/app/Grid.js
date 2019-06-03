// System
import React, { Component } from "react";
import ReactDOM from "react-dom";

import "./Grid.scss";

class Grid extends Component {
  render() {
    return <div className="GridLayout">
      <div className="column">
        {this.props.children[0]}
        {this.props.children[1]}
      </div>

      <div className="column">
        {this.props.children[2]}
      </div>

      <div className="column">
        {this.props.children[3]}
        {this.props.children[4]}
      </div>

    </div>;
  }
}

export default Grid;
