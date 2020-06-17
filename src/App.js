import React from 'react';
import './App.css';
import Categories from './components/Categories';
import SearchBar from './components/SearchBar';

function App() {
  return (
    <div className="App">
      <SearchBar />
      <Categories />
    </div>
  );
}

export default App;
