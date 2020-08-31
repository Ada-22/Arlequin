import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Items from './components/ListItems';
import ItemDetailContainer from './components/Description';
import Cart from './components/Cart'

function App() {
  return <>
  <Router>
        <Navbar />
            <Switch>
              <Route exact path="/">
                <Home/>
              </Route>          
              <Route path="/item/:id">
                <ItemDetailContainer />
              </Route>
              <Route path="/categories/:categoryId">
                <Items />
              </Route>          
              <Route path="/cart">
                <Cart />
              </Route>                       
            </Switch>
          </Router>
       </>;
}

export default App;
