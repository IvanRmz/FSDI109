import React from "react";
import "./App.css";
import NavBar from "./components/navBar";
import Footer from "./components/footer";
import "bootstrap/dist/css/bootstrap.min.css";
import Catalog from "./components/catalog";
import Home from "./components/home";
import { BrowserRouter, Route, Router, Switch } from "react-router-dom";
import Todo from "./components/todo";
import Cart from "./components/cart";

function App() {
  return (
    <BrowserRouter>
      <NavBar></NavBar>
      {/* <Home></Home> */}
      <div className="App container-fluid">
        {/* <Catalog></Catalog> */}

        <Route path="/" exact component={Home}></Route>
        <Route path="/catalog" component={Catalog}></Route>
        <Route path="/todo" component={Todo}></Route>
        <Route path="/cart" component={Cart}></Route>
      </div>
      <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;

// Advance ES6 topics
// Arrow functions
// Objects destructuring
// Spread operator
// Array methods ( filter, map, sort )
