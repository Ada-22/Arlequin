import React from 'react';
import { useListContext } from './context/CartContext';
import {Link} from 'react-router-dom'



export default function Cart() {
    const { list, total, clean } = useListContext(); 

return <>
<div className="product mt-5 pt-5">
    <h2>Su compra</h2>
    <ul className='card-md-8 mb-3'>{list.map((p, idx) => 
      <li className='col-md-12 p-0' key={p.id}>
        <strong>{p.name}</strong>
        <span className="ml-3">Valor por unidad = $ {p.price}</span>
        <strong className="text-dark m-3">Cantidad: {p.count}</strong>
        <span className="text-danger">Subtotal: $ {p.price * p.count}</span>
      </li>)}
    </ul>
    <p className="text-danger text-right mr-5 pr-5"><strong>Total: $ {total}</strong></p>
    <button className="btn btn-outline-danger mt-3 mb-5 mr-3"><strong>Confirmar compra</strong></button>
    <button className="btn btn-outline-danger mt-3 mb-5" onClick={clean}><strong>Eliminar pedido</strong></button>
    <div>
       <Link to="/mascaras"  className="btn btn-dark mr-4">Ver + Máscaras</Link>
       <Link to="/disfraces" className="btn btn-dark">Ver + Disfraces</Link>
    </div>
</div>
</>
}

