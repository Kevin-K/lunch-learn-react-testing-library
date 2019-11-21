import React, { Component } from "react";

export default class CountClicker extends Component {
  state = {
    clicks: 0
  };

  handleClick = () => this.setState({ clicks: this.state.clicks + 1 });

  handleClear = () => this.setState({ clicks: 0 });

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Click me!</button>
        <span>Clicks: {this.state.clicks}</span>
        <button
          onClick={this.handleClear}
          style={{ height: 16, backgroundColor: "red" }}
          data-testid="clear-btn"
        />
      </div>
    );
  }
}
