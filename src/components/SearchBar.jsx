<<<<<<< HEAD
import React, { Component } from 'react';
import shoppingcart from '../images/shopping-cart.jpg';
import '../Layouts/SearchBar.css';
=======
// import React, { Component } from 'react';
// import shoppingcart from '../images/shopping-cart.jpg';
>>>>>>> b554d9303a96af8ce35466a6e0118afe2a27fb1c

// export class Busca extends Component {

//   constructor(props) {
//     super(props);
//     this.state = { item: '' };
//     this.textChange = this.textChange.bind(this);
//   }

//   textChange(value) {
//     this.setState({ item: value.target.value });
//   }

<<<<<<< HEAD
  textInput() {
    const { item } = this.state;
    if (item === '') {
      return (
        <div className='search-bar'>
          <span data-testid="shopping-cart-button">
            <img src={shoppingcart} alt="button" />
          </span>
          <p data-testid="home-initial-message">
            Digite algum termo de pesquisa ou escolha uma categoria.
          </p>
        </div>
      );
    }
    return <p>{item}</p>;
  }

  render() {
    return (
      <div>
        <input className='input-text' type="text" onChange={this.textChange} />
        {this.textInput()}
      </div>
    );
  }
}
=======
//   textInput() {
//     const { item } = this.state;
//     if (item === '') {
//       return (
//         <div>
//           <span data-testid="shopping-cart-button">
//             <img src={shoppingcart} alt="button" />
//           </span>
//           <p data-testid="home-initial-message">
//             Digite algum termo de pesquisa ou escolha uma categoria.
//           </p>
//         </div>
//       );
//     }
//     return <p>{item}</p>;
//   }

//   render() {
//     return (
//       <div>
//         <input type="text" onChange={this.textChange} />
//         {this.textInput()}
//       </div>
//     );
//   }
// }
>>>>>>> b554d9303a96af8ce35466a6e0118afe2a27fb1c

// export default Busca;
