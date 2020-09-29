import React, { Component } from 'react';
import "font-awesome/css/font-awesome.min.css";
import "../css/cartItem.css";
class CartItem extends Component {
    state = {  }
    render() { 
        return ( 
        <div className="cart-item">
            <img className="cart-image" src={"/images/products/" + this.props.info.product.image} alt="Img"></img>
            <h1 className="cart-title">{this.props.info.product.title}</h1>
            <div className="cart-quantity-container">
                <h4>Qty</h4>
                <h3 className="cart-quantity">{this.props.info.quantity}</h3>
            </div>
            <div className="cart-total-container">
                <h4>Total</h4>
                <h3 className="cart-total">{(this.props.info.quantity * this.props.info.product.price).toFixed(2)}</h3>
            </div>
            <button
            className="btn btn-danger cart-btn"
            >
                <i class="fa fa-trash-o" aria-hidden="true"></i>
            </button>
        </div> 
        );
    }
}
 
export default CartItem;