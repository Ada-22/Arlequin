import React from 'react'
import { useListContext } from './context/CartContext'
import {Link} from 'react-router-dom'


function Count({ onAdd}) {
const { add, subtract, count, onCountChange } = useListContext(); 

    return (
        <>
        <div className='card bg-dark'>
            <div className='card-body bg-dark'>
                <p className='dark pl-3'>Cantidad</p> 
                <h3 className='text-center dark' value={count} onChange={onCountChange}>{count}</h3>
                <button id='restar' className='ml-2 mr-2' onClick={subtract}>-</button>
                &nbsp;
                <button id='sumar' onClick={ add }>+</button>
                <br/>
            </div>
        </div>
        <div>
            <Link to='/cart' className='btn btn-outline-danger mt-3 mb-2' onClick={onAdd}><strong>Comprar {count}</strong></Link><br/>
            <Link className='btn btn-outline-danger m-3' to={`/`}><strong>Volver a Home</strong></Link>                  
        </div>
    </>
    );
}



export default Count;