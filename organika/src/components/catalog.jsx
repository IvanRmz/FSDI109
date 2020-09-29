import React, { Component } from "react";
import Item from "./item";
import ItemService from "./../service/itemService";
import "../css/catalog.css";

class Catalog extends Component {
  state = {
    items: [],
    categories: [],
    selectedCategory: "",
  };
  render() {
    let itemsToDisplay = this.state.items;
    if (this.state.selectedCategory) {
      itemsToDisplay = this.state.items.filter((item) =>
        item.category.includes(this.state.selectedCategory)
      );
    }

    return (
      <div className="catalog-page">
        <div className="categories">
          <div
            className={"category"}
            key=""
            onClick={() => this.selectCategory("")}
          >
            <h6>All Items</h6>
          </div>
          {this.state.categories.map((category) => (
            <div
              className={this.getCategoryClass(category)}
              key={category}
              onClick={() => this.selectCategory(category)}
            >
              <h6>{category}</h6>
            </div>
          ))}
        </div>

        <h5>Our amazing catalog</h5>
        <div className="products">
          {itemsToDisplay.map((item) => (
            <Item key={item.id} produc={item}></Item>
          ))}
        </div>
      </div>
    );
  }

  getCategoryClass = (catName) => {
    let catClass = "category";
    if (catName === this.state.selectedCategory) {
      catClass += " active-cat";
    }
    return catClass;
  };

  selectCategory = (category) => {
    this.setState({ selectedCategory: category });
  };

  async componentDidMount() {
    let service = new ItemService();
    const data = await service.getProducts();
    this.setState({ items: data });

    let categories = [];
    data.forEach((item) => {
      if (!categories.includes(item.category)) categories.push(item.category);
    });

    this.setState({ categories: categories });
  }
}

export default Catalog;
