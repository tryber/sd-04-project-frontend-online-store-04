import React, { Component } from 'react';
import ShowProduct from './ShowProduct'
import '../Layouts/Categories.css';
import * as api from '../services/api';


class CategoriesCard extends Component {
  constructor(props) {
    super(props);
    this.state = { products: [], };
    this.requisitionFunction = this.requisitionFunction.bind(this);
  }

  requisitionFunction () {
    const { categorie } = this.props;
    return api.getProductsFromCategoryAndQuery(categorie.id)
    .then((data) => this.setState({ products: data.results})
    );
  }

  render() {
    const { categorie } = this.props;
    const { name } = categorie;
    return (
      <div data-testid="category">
        <h4 onClick={this.requisitionFunction} className='name-categorie'>{name}</h4>
      </div>
    );
  }
}

export default CategoriesCard;
