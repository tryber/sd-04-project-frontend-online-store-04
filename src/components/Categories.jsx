import React, { Component } from 'react';
import CategoriesCard from '../components/CategoriesCard';
import * as api from '../services/api';

class Categories extends Component {
  constructor(props) {
    super(props);
    this.state = { categories: '' };
  }

  componentDidMount() {
    api.getCategories()
      .then((result) => this.setState({ categories: result }));
  }

  render() {
    const { categories } = this.state;
    if (categories === '') return <div>Loading...</div>;
    return (
      <div>
        {categories.map((element) => <CategoriesCard key={element.id} categorie={element} />)}
      </div>
    );
  }
}

export default Categories;
