import Count from './Count';
import React, { useEffect, useState } from 'react';
import oneProduct from './Product-promise';




function ItemDetail({ product }) {
  return <>
  <h2 className='p-3'>Detalle</h2>
  <div className='card-md-8 mb-3'>
{product.map((p) => 
<p className='col-md-2' key={p.id}>{p.description}</p>)}
  </div>
  </>
}

function ItemDetailContainer() {
  const [product, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    oneProduct().then(res => {
      setProducts(res); 
      setLoading(false); 
    });
  }, []);


  return <>
  <div className="product">    
  { loading && <p>Cargando detalle...</p>}
  <ItemDetail product={product}></ItemDetail>
  <Count initial = "0" min = "0" max = "10" />
  <button className="btn-primary btn-dark">Comprar</button>
  </div>
  </>;
}

export default ItemDetailContainer

