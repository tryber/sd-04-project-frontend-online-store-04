import React, { Component } from 'react';
import CategoriesCard from '../components/CategoriesCard';
import * as api from '../services/api';
import ProductsList from './ProductsList';
import './categories.css'

class Categories extends Component {
  constructor(props) {
    super(props);
    this.state = { categories: '', products: [] };
    this.getProducts = this.getProducts.bind(this);
  }

  componentDidMount() {
    api.getCategories()
      .then((result) => this.setState({ categories: result }));
  }

  getProducts(categoryId){
    api.getProductsFromCategoryAndQuery(categoryId)
      .then(data => this.setState({products: data.results}));
  }

  render() {
    const { categories } = this.state;
    if (categories === '') return <div>Loading...</div>;
    return (
      <div className="categories-products">
        <div>
          {categories.map((element) => <CategoriesCard key={element.id} categorie={element} getProducts={this.getProducts} />)}
        </div>
        <div>
          <ProductsList products={this.state.products} />
        </div>
      </div>
    );
  }
}

export default Categories;
