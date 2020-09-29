import React, { Component } from "react";
import { connect } from "react-redux";
import { incrementCartCounter} from "../store/actions";
import CartItem from "./cartItem";
import "../css/cart.css";

class Cart extends Component {
  state = {};
  render() {
    return (
      <div>
        <h3>There are {this.props.products.length} items on your cart.</h3>
        <div className="cart-list">
          {this.props.products.map((prod) => (
            <CartItem key={prod.product.id} info={prod}></CartItem>
          ))}
        </div>
      </div>
    );
  }
  testDispatch = () => {
    console.log("dispatch");
    this.props.incrementCartCounter();
  };
}

const mapStateToProps = (state) => {
  return {
    products: state.cart,
  };
};

export default connect(mapStateToProps, { incrementCartCounter})(Cart);
