import React, { Component } from 'react';

class Details extends Component {
  constructor(props) {
    super(props);
    this.state = { product: '' };
  }

  render() {
    const { id, title, thumbnail, price, availableQuantity } = this.props.location.state;
    return (
      <div>
        <h2>{id}</h2>
        <h3 data-testid="product-detail-name">{title}</h3>
        <img src={thumbnail} alt="product" />
        <h3>{price}</h3>
        <h4>{availableQuantity}</h4>
      </div>
    );
  }
}

export default Details;
