import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import ItemsD from './components/ListItems';
import ItemsM from './components/ListItemsM';
import ItemDetailContainer from './components/Description';
import Cart from './components/Cart';
import ProductS from './components/Products';



function App() {
  return <>
  <Router>
    <Navbar/>
      <Switch>
        <Route exact path="/Arlequin" component={Home}/>
        <Route path="/productos" component={ProductS}/>
        <Route path="/disfraces" component={ItemsD}/>
        <Route path="/mascaras" component={ItemsM}/>
        <Route path="/detalle" component={ItemDetailContainer}/>   
        <Route path="/cart" component={Cart}/>     
      </Switch>               
  </Router>
       </>;
}

export default App;
