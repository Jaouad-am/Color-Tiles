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
    this.handleClick = this.handleClick.bind(this);
  }
  changeTile() {
    //get a new random tile if its the same color again
    let randTile;
    do {
      randTile = choice(this.props.tiles);
    } while (this.state.color === randTile);
    this.setState({ color: randTile });
  }
  handleClick(e) {
    this.changeTile();
  }
  render() {
    return (
      <div
        className="Tile"
        style={{ backgroundColor: this.state.color }}
        onClick={this.handleClick}
      ></div>
    );
  }
}
export default Tile;
