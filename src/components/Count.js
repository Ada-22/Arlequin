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
        <>
        <div className='card bg-dark'>
            <div className='card-body bg-dark'>
                <p className='dark pl-3'>Cantidad</p>
                <h3 className='text-center dark' id="contadorValue">{ contador }</h3>
                <button id="restar" className='ml-2 mr-2' onClick={ subtract }>-</button>
                &nbsp;
                <button id="sumar" onClick={ add }>+</button>
                <br/>
            </div>
        </div>
        <div>
            <button className="btn btn-outline-danger mt-3 mb-5"><strong>Comprar {contador}</strong></button>
        </div>
    </>
    )
}



export default Contador;