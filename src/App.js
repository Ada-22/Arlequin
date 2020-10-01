import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import Navbar from './components/Navbar'
import ItemsD from './components/ListItems'
import ItemsM from './components/ListItemsM'
import Helper from './components/Helper'
import Cart from './components/Cart'
import Form from './components/Form'
import { ListProvider } from './components/context/CartContext'


function App() {
  return <>
  <ListProvider value={[]} initial ={1} min ={1} max ={12}>  
    <Router>
      <Navbar/>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/Arlequin' component={Home}/>
        <Route path='/form' component={Form}/>
        <Route path='/disfraces' component={ItemsD}/>
        <Route path='/mascaras' component={ItemsM}/>
        <Route path='/detalle/:id' component={Helper}/>   
        <Route path='/cart' component={Cart}/>     
      </Switch>           
    </Router>
  </ListProvider>
</>;
}

export default App;
