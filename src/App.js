import React from 'react';
import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Items from './components/ListItems';
import ItemDetailContainer from './components/Description';

function App() {
  return <>
   <Navbar/>
   <Home/>
   <Items/>
   <ItemDetailContainer/>
  </>;
}

export default App;
