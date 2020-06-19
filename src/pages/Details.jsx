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
        <div>
          <h2>{id}</h2>
          <h3 data-testid="product-detail-name">{title}</h3>
          <img src={thumbnail} alt="product" />
          <h3>{price}</h3>
          <h4>{availableQuantity}</h4>
        </div>
        <div>
          <form>
            <h2>Avaliações</h2>
            <label htmlFor="inputEmail">Email:</label><br />
            <input type="email" />
            <br />
            <label htmlFor="inputText">Mensagem:</label><br />
            <input type="text" data-testid="product-detail-evaluation" />
            <br />
            <label htmlFor="inputRating">Dê sua nota ao produto:</label><br />
            <input type="number" min="1" max="5" />
            <br />
            <button>Avaliar</button>
          </form>
        </div>
      </div>
    );
  }
}

export default Details;
