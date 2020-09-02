import React from "react"

function ItemDetail({ product }) {

    let prod = product.filter(p => p.id === 10002);
    return <>
    <h2>Detalle</h2>
    <ul>{prod.map((p) => 
      <li key={p.id}>
        <p className='col-md-12 p-0' key={p.id}><strong>{p.name}</strong><br/><span>{p.description}</span><br/>
        <span>Valor= $ {p.precio}</span></p>
        <img className='img-fluid imgs mb-1'src={p.img} alt="product"/><br/></li>)}
    </ul>
    </>
  }

export default ItemDetail