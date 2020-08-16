import React from "react"

import Navbar from './Navbar';
import Count from './Count';

const Home = ()=>{
    return(
        <div className="App">
        <header className="App-header">
         <Navbar/>
         <Count initial = "0" min = "0" max = "10" />
        </header>
      </div>
    );
}

export default Home