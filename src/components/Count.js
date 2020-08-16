import React, { useState } from 'react'

let Contador = ({ initial, min, max }) => {
   
    const [contador, setCount] = useState(Number(initial));

    const add = () => {
        if(contador < Number(max)){
            setCount(contador + 1);
        }
    }

    const subtract = () => {
        if(contador > Number(min)){
            setCount(contador - 1);
        }
    }

    return (
        <div className='card bg-dark'>
            <div className='card-body bg-dark'>
                <p className='dark'>Contador</p>
                <h3 id="contadorValue">{ contador }</h3>
                <button id="restar" onClick={ subtract }>-</button>
                &nbsp;
                <button id="sumar"onClick={ add }>+</button>
                <br/>
            </div>
        </div>
    )
}

export default Contador;