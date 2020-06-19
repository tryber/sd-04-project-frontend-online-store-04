import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ShoppingCart from './ShoppingCart';
import './categories.css';

class ProductsList extends Component {
  constructor(props) {
    super(props);
    this.state = { cartItems:[] };
    this.addToCart = this.addToCart.bind(this);
  }

  addToCart(product) {
    this.setState((state) => ({cartItems: [...state.cartItems, product]}));
  }

  render() {
    const { products } = this.props;
    if(!products) return <div></div>
    return(
      <div className="categories-products">
      <div>
        <button data-testid="shopping-cart-button">Teste</button>
        {products.map(({ id, title, thumbnail, price, available_quantity }) => (
          <div data-testid="product" key={id}>
            <p>{title}</p>
            <img src={thumbnail} alt="produto" />
            <p>{`R$ ${price.toFixed(2)}`}</p>
              <Link to={{pathname:`/details/${id}`, state:{title, thumbnail, price, available_quantity}}}>
                <p data-testid="product-detail-link">Ver Detalhes</p>
              </Link>
              <p data-testid="product-add-to-cart" onClick={() => this.addToCart({id, title, thumbnail, price, available_quantity})}>Adicionar ao Carrinho</p>
          </div>
        ))}
        <div>
      </div>
          <ShoppingCart cartItems={this.state.cartItems} />
        </div>
      </div> 
    )
  }
}

export default ProductsList;
