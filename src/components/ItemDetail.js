import React from "react"


function ItemDetail({ product }) {
  
    let prod = product.filter(p => p.id === 10001);
  
    console.log(prod);
    return <>
    <h2>Detalle</h2>
    <div className='card-md-8 mb-3'>
    {prod.map((p) => 
    <p className='col-md-12 p-0' key={p.id}><strong>{p.name}</strong><br/><span>{p.description}</span><br/><span className="ml-3">Valor= {p.precio}</span></p>
    )}
    </div>
    </>
  }

export default ItemDetail