import React, { Component } from "react";

export class AddTodo extends Component {
  state = {
    title: "",
  };

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.props.addTodo(this.state.title);
    this.setState({ title: " " });
  };

  render() {
    return (
      <form style={{ display: "flex" }} onSubmit={this.onSubmit}>
        <input
          type="text"
          name="title"
          style={{ flex: "10", padding: "5px" }}
          placeholder="Add To-do..."
          value={this.state.value}
          onChange={this.onChange}
        ></input>
        <input
          type="submit"
          value="Submit"
          className="btnSubm"
          style={{ flex: "1" }}
        />
      </form>
    );
  }
}

export default AddTodo;
