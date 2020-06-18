import React, { Component } from 'react';
import EmptyCart from '../components/EmptyCart';

export class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = { items: [] };
  }

  render() {
    if (this.state.items.length === 0) return <EmptyCart />;
    return (
      <div>
        <h3>Carrinho de Compras</h3>
      </div>
    );
  }
}

export default Cart;
