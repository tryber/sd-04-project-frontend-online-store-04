import React from 'react';
import './App.css';
import Categories from './components/Categories';
import SearchBar from './components/SearchBar';
import ShoppingCart from './components/ShoppingCart';

function App() {
  return (
    <div className="App">
      <div className="container-bar-cart">
        <SearchBar className='search-bar'/>
        <ShoppingCart className='shopping-cart' />
      </div>
      <Categories className='categories'/>
    </div>
  );
}

export default App;
