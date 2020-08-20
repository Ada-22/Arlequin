import React from "react"
import Count from './Count';


const product = ()=>{
    return(
        <div className="product">
        <Count initial = "0" min = "0" max = "10" />
      </div>
    );
}

export default product