import React, { Component } from "react";
import "./Tile.css";
import { choice } from "./Helpers";

class Tile extends Component {
  static defaultProps = {
    tiles: ["red", "green", "lightblue", "purple", "orange"],
  };
  constructor(props) {
    super(props);
    this.state = {
      color: choice(this.props.tiles),
    };
    this.handClick = this.handClick.bind(this);
  }
  changeTile() {}
  handClick(e) {
    this.changeTile();
  }
  render() {
    return (
      <div
        className="Tile"
        style={{ backgroundColor: this.state.color }}
        onClick={this.handClick}
      ></div>
    );
  }
}
export default Tile;
