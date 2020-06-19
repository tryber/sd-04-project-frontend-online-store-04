import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ProducsList extends Component {
  constructor(props) {
    super(props);
    this.state = { };
  }
  render() {
    const { products } = this.props;
    if (!products) return <div />;
    return (
      <div>
        {products.map(({ id, title, thumbnail, price }) => (
          <div data-testid="product" key={id}>
            <p>{title}</p>
            <img src={thumbnail} alt="produto" />
            <p>{`R$ ${price.toFixed(2)}`}</p>
            <Link to={`/details/${id}`}>
              <p>Ver Detalhes</p>
            </Link>
          </div>
        ))}
      </div>
    );
  }
}

export default ProducsList;
