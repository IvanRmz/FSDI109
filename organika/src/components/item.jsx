import React, { Component } from "react";
import QuantityPicker from "./quantityPicker";
import "../css/item.css";
import "font-awesome/css/font-awesome.min.css";

import { connect } from "react-redux";
import { incrementCartCounter, addProduct } from "../store/actions";

class Item extends Component {
  state = {
    quantity: this.props.produc.minimum || 1,
    minimum: this.props.produc.minimum || 1,
    max: this.props.produc.stock,
  };
  render() {
    return (
      <div className="container-item">
        <img
          alt="Img"
          className="item-img"
          placeholder="Image"
          src={"/images/products/" + this.props.produc.image}
        ></img>
        <h2 className="item-title">{this.props.produc.title}</h2>

        <h4 className="item-price">
          <span className="prtice-title">Price:</span> $
          {this.props.produc.price}
        </h4>
        <h3 className="item-total">
          <span className="prtice-title">Total:</span> $
          {(this.props.produc.price * this.state.quantity).toFixed(2)}
        </h3>
        <QuantityPicker
          max={this.state.max}
          minimum={this.state.minimum}
          value={this.state.quantity}
          onValueChange={(qnt) => this.handleQuantityChange(qnt)}
        ></QuantityPicker>
        <div className="btn-add">
          <button
            onClick={this.addProductToCart}
            className="btn btn-sm btn-outline-primary"
          >
            <i className="fa fa-shopping-cart cart-icon" aria-hidden="true"></i>
          </button>
        </div>
      </div>
    );
  }

  addProductToCart = () => {
    const addedProduct = {
      product: this.props.produc,
      quantity: this.state.quantity,
    };

    this.props.addProduct(addedProduct);
    this.props.incrementCartCounter();

    /**
     *
     * create the action (similar to addTodo )
     * create the reducer (similar to todoReducer)
     * combine the new reducer into rootReducer ( reducer/index.js)
     * dispatch the action and send the addedProduct
     *
     */
  };

  handleQuantityChange = (qnt) => {
    this.setState({ quantity: qnt });
  };
}

export default connect(null, { incrementCartCounter, addProduct })(Item);
