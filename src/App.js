import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import ItemsD from './components/ListItems';
import ItemsM from './components/ListItemsM';
import Helper from './components/Helper';
import Cart from './components/Cart';
import ProductS from './components/Products';
import { ListProvider } from './components/context/CartContext';
import Footer from './components/Footer';



function App() {
  return <>
  <ListProvider value={[]} initial ={1} min ={1} max ={10}>  
    <Router>
      <Navbar/>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/productos" component={ProductS}/>
        <Route path="/disfraces" component={ItemsD}/>
        <Route path="/mascaras" component={ItemsM}/>
        <Route path="/detalle/:id" component={Helper}/>   
        <Route path="/cart" component={Cart}/>     
      </Switch>
      <Footer/>             
    </Router>
  </ListProvider>
</>;
}

export default App;
