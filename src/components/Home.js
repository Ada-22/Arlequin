import React from "react"

import Navbar from './Navbar';
import Count from './Count';

const Home = ()=>{
    return(
        <div className="App">
        <header className="App-header">
         <Navbar/>
         <Count/>
        </header>
      </div>
    );
}

export default Home