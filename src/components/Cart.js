import React from 'react';
import { useListContext } from './context/CartContext';
import {Link} from 'react-router-dom'



export default function Cart() {
    const { quantity, list, total, clean } = useListContext(); 
  if (quantity === 0 ) {
    return <>
    <div className="container" style={{ height: 500 }}>
        <div className="py-5 text-center mt-5">
            <h2>Tu carrito de compras <i className="fa fa-shopping-cart" aria-hidden="true"></i> está vacío.</h2>
            <Link className="btn btn-outline-danger m-3" to={`/`}>Volver a Home</Link>                        
        </div>
    </div>
</> 
  }  
else
return <>
<div className="container product mt-5 pt-5">
  <div className="row">
    <div className="col-md-12">
      <h2>Su compra</h2>
      <ul className='card-md-8 mb-3'>{list.map( p => 
        <li className='p-0' key={p.id}>
          <strong>{p.name}</strong>
          <span className="ml-3">Valor por unidad = $ {p.price}</span>
          <strong className="text-dark m-3">Cantidad: {p.count}</strong>
          <span className="text-danger">Subtotal: $ {p.price * p.count}</span>
        </li>)}
      </ul>
      <p className="text-danger text-right mr-5 pr-5"><strong>Total: $ {total}</strong></p>
    </div>
    <div className="col-md-6 text-center">
      <Link to="/form" className="btn btn-outline-danger m-3"><strong>Confirmar compra</strong></Link>
      <Link to="/mascaras"  className="btn btn-dark m-3">Ver + Máscaras</Link>
    </div>
    <div className="col-md-6 text-center">
       <button className="btn btn-outline-danger m-3" onClick={clean}><strong>Eliminar pedido</strong></button>
       <Link to="/disfraces" className="btn btn-dark m-3">Ver + Disfraces</Link>
    </div>
  </div>
</div>
</>
}

