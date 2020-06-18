import React from 'react';
import './App.css';
import Categories from './components/Categories';
import SearchBar from './components/SearchBar';
import ShoppingCart from './components/ShoppingCart';

function App() {
  return (
    <div className="App">
      <SearchBar />
      <ShoppingCart />
      <Categories />
    </div>
  );
}

export default App;
