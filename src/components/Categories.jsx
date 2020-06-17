import React, { Component } from 'react';
import * as api from '../services/api';

class Categories extends Component {

  componentDidMount() {
    return api.getCategories().then((categories) => console.log(categories));
  }

  render() {
    return (
      <div />
    );
  }
}

export default Categories;
