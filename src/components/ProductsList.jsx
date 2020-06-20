import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ShoppingCart from './ShoppingCart';

class ProductsList extends Component {
  constructor(props) {
    super(props);
    this.state = { cartItems: [] };
    this.addToCart = this.addToCart.bind(this);
  }

  addToCart(product) {
    this.setState((state) => ({ cartItems: [...state.cartItems, product] }));
  }

  render() {
    const { products } = this.props;
    const { cartItems } = this.state;
    if (!products) return <div />;
    return (
      <div className="categories-products">
        {products.map(({ id, title, thumbnail, price, available_quantity }) => (
          <div data-testid="product" key={id}>
            <p>{title}</p>
            <img src={thumbnail} alt="produto" />
            <p>{`R$ ${price.toFixed(2)}`}</p>
            <Link
              to={{
                pathname: `/details/${id}`,
                state: { title, thumbnail, price, available_quantity, cartItems },
              }}
            >
              <p data-testid="product-detail-link">Ver Detalhes</p>
            </Link>
            <button
              data-testid="product-add-to-cart"
              onClick={() => this.addToCart({ id, title, thumbnail, price, available_quantity })}
            >
              Adicionar ao Carrinho
            </button>
          </div>
        ))}
        <ShoppingCart cartItems={cartItems} />
      </div>
    );
  }
}

export default ProductsList;
