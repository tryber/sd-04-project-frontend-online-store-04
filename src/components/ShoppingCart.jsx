import React from 'react';
import EmptyCart from './EmptyCart';

export default class Shopping extends React.Component {
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
