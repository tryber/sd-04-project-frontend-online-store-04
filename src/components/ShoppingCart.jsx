import React from 'react';
import EmptyCart from './EmptyCart';

export default class ShoppingCart extends React.Component {
  constructor(props) {
    super(props);
    this.state = { items: this.props.cartItems };
  }

  render() {
    const { cartItems } = this.props;
    if (cartItems.length < 1) return <EmptyCart />;
    return (
      <div>
        <h3>Carrinho de Compras</h3>
        {cartItems.map((item) => (
          <div key={item.id}>
            <p data-testid="shopping-cart-product-name">{item.title}</p>
            <p data-testid="shopping-cart-product-quantity">1</p>
          </div>
        ))}
      </div>
    );
  }
}
