import React, { Component } from 'react';
import { connect } from "react-redux";
import { incrementCartCounter } from "../store/actions/index";

class Cart extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <h1>Items you added to the cart will be here</h1> 
                <button 
                    onClick={this.testDispatch} 
                    className="btn btn-warning"
                >
                    Test Dispatch
                </button>
            </div>
        );
    }
    testDispatch = () => {
        console.log("dispatch");
        this.props.incrementCartCounter();
    };
}
 
export default connect(null, { incrementCartCounter } )(Cart);