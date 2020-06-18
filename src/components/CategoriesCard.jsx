import React, { Component } from 'react';

class CategoriesCard extends Component {
  render() {
    const { categorie } = this.props;
    const { name } = categorie;
    return (
      <div data-testid="category">
        <h4>{name}</h4>
      </div>
    );
  }
}

export default CategoriesCard;
