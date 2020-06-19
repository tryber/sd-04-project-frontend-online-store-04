import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ProductsList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { products } = this.props;
    if (!products) return <div />;
    return (
      <div>
        {products.map(({ id, title, thumbnail, price, available_quantity }) => (
          <div data-testid="product" key={id}>
            <p>{title}</p>
            <img src={thumbnail} alt="produto" />
            <p>{`R$ ${price.toFixed(2)}`}</p>
            <Link
              to={{
                pathname: `/details/${id}`,
                state: { title, thumbnail, price, available_quantity },
              }}
            >
              <p data-testid="product-detail-link">Ver Detalhes</p>
            </Link>
          </div>
        ))}
      </div>
    );
  }
}

export default ProductsList;
