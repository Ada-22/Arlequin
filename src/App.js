import React from 'react';
import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Description from './components/Description';
import Items from './components/ListItems';

function App() {
  return <>
   <Navbar/>
   <Home/>
   <Items/>
   <Description/>
  </>;
}

export default App;
