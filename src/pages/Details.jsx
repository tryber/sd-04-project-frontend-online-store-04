import React, { Component } from 'react';

class Details extends Component {
  constructor(props) {
    super(props);
    this.state = { product: '' };
  }

  componentDidMount() {
    const id = this.props.match.params.id;
    this.setState({ product: id });
  }

  render() {
    const { title, thumbnail, price, availableQuantity } = this.props.location.state;
    return (
      <div>
        <h2>{this.state.product}</h2>
        <h3 data-testid="product-detail-name">{title}</h3>
        <img src={thumbnail} alt="product-image" />
        <h3>{price}</h3>
        <h4>{availableQuantity}</h4>
      </div>
    );
  }
}

export default Details;
