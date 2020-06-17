import React from 'react';
import * as api from '../services/api';

export default class Categories extends React.Component {
  constructor(props) {
    super(props);
    this.state = { categories: [], };
  }

  componentDidMount() {
    api
      .getCategories()
      .then((categorie) =>
        // this.setState({ categories: categorie.map((cat) => cat.name) }),
        console.log(categorie)
      );
  }

  render() {
    return <div></div>;
  }
}