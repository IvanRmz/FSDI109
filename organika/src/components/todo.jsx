import React, { Component } from "react";

class Todo extends Component {
  state = {
    todoText: "",
    todoList: [],
  };
  render() {
    return (
      <div>
        <div>
          <input
            id=""
            type="text"
            value={this.state.todoText}
            onChange={this.onTextChange}
            placeholder="Todo text"
          />
          <button onClick={this.addTodo} className="btn btn-primary">
            Add
          </button>
        </div>
        <div className="list">
          {this.getTodoCount()}
          <hr></hr>
          {this.state.todoList.map((t) => (
            <div className="item" key={t}>{t}</div>
          ))}
        </div>
      </div>
    );
  }

  getTodoCount = () => {
    let count = this.state.todoList.length;
    var txt = "elements";
    if (count === 1) txt = "element";
    return (
      <label>
        We have {count} {txt} in the array.
      </label>
    );
  };

  onTextChange = (event) => {
    this.setState({ todoText: event.target.value });
  };
  addTodo = () => {
    let inputTxt = this.state.todoText;
    console.log("adding ", inputTxt);
    if (inputTxt.trim().length > 0) {
      let todoList = [...this.state.todoList, inputTxt];
      this.setState({ todoList: todoList, todoText: "" });
    } else { // in case that only spaces were inserted in the input, clean
        this.setState({todoText: "" });
    }
  };
}

export default Todo;
