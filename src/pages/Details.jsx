import React, { Component } from 'react';
import ShoppingCart from '../components/ShoppingCart';

class Details extends Component {
  constructor(props) {
    super(props);
    this.state = { cartItems: this.props.location.state.cartItems };
    this.addToCart = this.addToCart.bind(this);
  }

  addToCart(product) {
    this.setState((state) => ({ cartItems: [...state.cartItems, product] }));
  }

  render() {
    const { availableQuantity } = this.props.location.state.available_quantity;
    const { id, title, thumbnail, price } = this.props.location.state;
    return (
      <div>
        <h2>{id}</h2>
        <h3 data-testid="product-detail-name">{title}</h3>
        <img src={thumbnail} alt="product" />
        <h3>{price}</h3>
        <h4>{availableQuantity}</h4>
        <button
          data-testid="product-detail-add-to-cart"
          onClick={() => this.addToCart({ id, title, thumbnail, price, availableQuantity })}
        > Adicionar ao Carrinho
        </button>
        <div>
          <ShoppingCart cartItems={this.state.cartItems} />
          <button style={{ display: 'none' }} data-testid="shopping-cart-button" />
        </div>
        <div>
          <h2>Avaliações</h2>
          <label htmlFor="inputEmail">Email:</label><br />
          <input type="email" /><br />
          <label htmlFor="inputText">Mensagem:</label><br />
          <input type="text" data-testid="product-detail-evaluation" /><br />
          <label htmlFor="inputRating">Dê sua nota ao produto:</label><br />
          <input type="number" min="1" max="5" /><br />
          <button>Avaliar</button>
        </div>
      </div>
    );
  }
}

export default Details;

