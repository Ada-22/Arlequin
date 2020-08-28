import Count from './Count';
import React, { useEffect, useState } from 'react';
import productStore from './Product-store';
import ItemDetail from './ItemDetail'


function ItemDetailContainer() {
  const [product, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    productStore().then(res => {
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

