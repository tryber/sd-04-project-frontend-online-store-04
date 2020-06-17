import React from 'react';
import './App.css';
import Categories from './components/Categories';
import SearchBar from './components/SearchBar';
import ShoppingCart from './components/ShoppingCart';

function App() {
  return (
    <div className="App">
      <Categories />
      <SearchBar />
      <ShoppingCart />
    </div>
  );
}

export default App;
