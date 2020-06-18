import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import * as pages from './pages';

function App() {
  return (
<<<<<<< HEAD
    <div className="App">
      <div className="container-bar-cart">
        <SearchBar className='search-bar'/>
        <ShoppingCart className='shopping-cart' />
      </div>
      <Categories className='categories'/>
=======
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={pages.Main} />
          <Route path="/cart" component={pages.Cart} />
          <Route component={pages.NotFound} />
        </Switch>
      </Router>
>>>>>>> b554d9303a96af8ce35466a6e0118afe2a27fb1c
    </div>
  );
}

export default App;
