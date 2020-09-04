import React from 'react';
import { useListContext } from './context/CartContext';


function Count({ onAdd}) {
const { add, subtract, contador, onContadorChange } = useListContext(); 


    return (
        <>
        <div className='card bg-dark'>
            <div className='card-body bg-dark'>
                <p className='dark pl-3'>Cantidad</p> 
                <h3 className='text-center dark' value={contador}  onChange={onContadorChange}/>
                <button id="restar" className='ml-2 mr-2' onClick={subtract}>-</button>
                &nbsp;
                <button id="sumar" onClick={ add }>+</button>
                <br/>
            </div>
        </div>
        <div>
            <button className="btn btn-outline-danger mt-3 mb-5" onClick={onAdd}><strong>Comprar{contador}</strong></button>
        </div>
    </>
    );
}



export default Count;