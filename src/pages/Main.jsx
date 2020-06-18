import React, { Component } from 'react';
import * as Components from '../components';
import shoppingcart from '../images/shopping-cart.jpg';
// import * as api from '../services/api';

export class Main extends Component {
  constructor(props) {
    super(props);
    this.state = { item: '' };
    this.textChange = this.textChange.bind(this);
  }

  textChange(value) {
    this.setState({ item: value.target.value });
  }

  textInput() {
    const { item } = this.state;
    if (item === '') {
      return (
        <div>
          <span data-testid="shopping-cart-button">
            <img src={shoppingcart} alt="button" />
          </span>
          <p data-testid="home-initial-message">
            Digite algum termo de pesquisa ou escolha uma categoria.
          </p>
        </div>
      );
    }
    return <p>{item}</p>;
  }

  render() {
    return (
      <div>
        <div>
          <input type="text" onChange={this.textChange} />
          {this.textInput()}
        </div>
        <div className="categories">
          <Components.Categories />
        </div>
        <div>
          <Components.ShopingCart />
        </div>
      </div>
    );
  }
}

export default Main;
