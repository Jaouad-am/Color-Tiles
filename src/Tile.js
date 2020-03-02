import React, { Component } from "react";
import "./Tile.css";

class Tile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: "blue",
    };
  }
  render() {
    return (
      <div className="Tile" style={{ backgroundColor: this.state.color }}></div>
    );
  }
}
export default Tile;
