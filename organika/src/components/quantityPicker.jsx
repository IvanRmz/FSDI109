import React, { Component } from "react";
import "../css/quantityPicker.css";

class QuantityPicker extends Component {
  // test = () => {
  //   var dog = {
  //     name: "Fido",
  //     age: 5,
  //     color: "white",
  //   };

  //   // var name = dog.name;
  //   // var age = dog.age;
  //   // var color = dog.color;

  //   // object destructuring
  //   var { name, age, color } = dog;
  //   console.log(dog);

  //   // spread operator ( ... )
  //   var colors = ["red", "black", "blue"];

  //   // var aCopy = colors;
  //   // aCopy.push("green");

  //   // console.log(aCopy);
  //   console.log(colors);

  //   // var aCopy = [...colors, "purple", "pink"];
  //   // console.log(aCopy);

  //   var mapRes = colors.map((item) => {
  //     return item.toUpperCase();
  //   });
  //   console.log(mapRes);

  //   // filter
  // var nums = [3,1,78,23,87,2];
  // var big = nums.filter((n) =>  n > 10);

  // // var colors = ["red", "black", "blue"];
  // // let colorLaberls = colors.map((x) => <button>{x}</button>);
  // };

  state = {
    quantity: this.props.value,
    name: "Ivan",
  };

  render() {
    // this.test();

    return (
      <div className="picker">
        <button 
          onClick={this.increase} 
          disabled={this.state.quantity === this.props.max}
          className="btn btn-primary"
        >
          +
        </button>
        <label className="border border-dark quantity-lbl">
          {this.state.quantity}
        </label>
        <button
          onClick={this.decrease}
          disabled={this.state.quantity === this.props.minimum}
          className="btn btn-primary"
        >
          -
        </button>
      </div>
    );
  }

  increase = () => {
    let value = this.state.quantity + 1;
    if (value <= this.props.max) {
      this.setState({ quantity: value });
      this.props.onValueChange(value);
    }
  };

  decrease = () => {
    let newVal = this.state.quantity - 1;
    if (newVal >= this.props.minimum) {
      this.setState({ quantity: newVal });
      this.props.onValueChange(newVal);
    }
  };
}

export default QuantityPicker;
