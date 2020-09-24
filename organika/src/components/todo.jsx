import React, { Component } from "react";
import { connect } from "react-redux";
import { addTodo } from "../store/actions/index";

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
          {this.props.todos.map((t) => (
            <div className="item" key={t}>{t}</div>
          ))}
        </div>
      </div>
    );
  }

  getTodoCount = () => {
    let count = this.props.todos.length;
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
        this.props.addTodo(this.state.todoText);
        this.setState({todoText: "" });
    }
    
  };
}

const mapStateToProps = (state) => {
  return {
    todos: state.todos
  };
};

//  connect(null,{  }) 1rst param what to change , 2nd 
export default connect(mapStateToProps,{ addTodo })(Todo);
