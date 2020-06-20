import React, { Component } from 'react';
import ShoppingCart from './ShoppingCart';

class Details extends Component {
  constructor(props) {
    super(props);
    this.state = { product: '', cartItems: this.props.location.state.cartItems};
    this.addToCart = this.addToCart.bind(this);
  }

  componentDidMount() {
    const id = this.props.match.params.id;
    this.setState({ product: id })
  }

  addToCart(product) {
    this.setState((state) => ({cartItems: [...state.cartItems, product]}));
  }

  render() {
    if (this.state.product === '') return <div></div>
    const { id, title, thumbnail, price, available_quantity, cartItems } = this.props.location.state;
    return(
      <div>
        <h2>{this.state.product}</h2>
        <h3 data-testid="product-detail-name">{title}</h3>
        <img src={thumbnail} alt="product-image" />
        <h3>{price}</h3>
        <h4>{available_quantity}</h4>
        <button data-testid="product-detail-add-to-cart" onClick={() => this.addToCart({id, title, thumbnail, price, available_quantity})}>Adicionar ao Carrinho</button>
        <div>
          <ShoppingCart cartItems={this.state.cartItems}/>
          <button style={{display: 'none'}} data-testid="shopping-cart-button"></button>
        </div>
      </div>
    )
  }
}

export default Details;
