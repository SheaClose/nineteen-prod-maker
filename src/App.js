import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      title: "",
      imgUrl: "",
      price: "",
      products: []
    };
  }
  inputHandler(key, val) {
    this.setState({
      [key]: val
    });
  }
  onSubmit() {
    let { title, imgUrl, price, products } = this.state;
    let prods = products.slice();
    prods.push({ title, imgUrl, price });
    this.setState({
      products: prods,
      title: "",
      imgUrl: "",
      price: ""
    });
  }

  render() {
    let products = this.state.products.map((product, ind) => (
      <div key={ind}>
        <img src={product.imgUrl} alt={product.title} width="100" />
        <div>
          <h3>{product.title}</h3>
          <h5>${product.price}</h5>
        </div>
      </div>
    ));

    return (
      <div className="App">
        <header className="App-header">
          <input
            value={this.state.title}
            type="text"
            placeholder="Title"
            onChange={e => this.inputHandler("title", e.target.value)}
          />
          <input
            value={this.state.imgUrl}
            type="text"
            placeholder="Image Url"
            onChange={e => this.inputHandler("imgUrl", e.target.value)}
          />
          <input
            value={this.state.price}
            type="text"
            placeholder="Price"
            onChange={e => this.inputHandler("price", e.target.value)}
          />
          <button onClick={() => this.onSubmit()}>Submit</button>
        </header>
        {products}
      </div>
    );
  }
}

export default App;
