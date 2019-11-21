import React, { Component } from "react";

export default class AsyncNameTag extends Component {
  state = {
    isLoading: false,
    isLoaded: false,
    firstName: null,
    lastName: null
  };
  componentDidMount() {
    this.loadUser();
  }

  loadUser = () => {
    this.setState({ isLoading: true });

    setTimeout(() => {
      this.setState({
        isLoaded: true,
        isLoading: false,
        firstName: "Kevin",
        lastName: "Kelly"
      });
    }, 1000);
  };

  renderLoading() {
    return <div className="spinner"> Loading... </div>;
  }

  renderNameTag() {
    const { firstName, lastName } = this.state;
    return (
      <div>
        <div>Hello user!</div>
        <div> First Name: {firstName}</div>
        <div> Last Name: {lastName}</div>
      </div>
    );
  }

  render() {
    const { isLoading, isLoaded } = this.state;
    if (isLoading) {
      return this.renderLoading();
    } else if (isLoaded) {
      return this.renderNameTag();
    } else {
      return null;
    }
  }
}
