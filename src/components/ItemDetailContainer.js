import Count from './Count';
import React, { useEffect, useState } from 'react';
import productStore from './Product-store';
import ItemDetail from './ItemDetail';


function ItemDetailContainer({}) {
  const [product, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    productStore().then(res => {
      setProducts(res); 
      setLoading(false); 
    });
  }, []);


  return <>
  <div className="container product mt-5 pt-5">
    <div className="row"> 
      <div className="col-md-6">
      { loading && <p>Cargando detalle...</p>}
      <ItemDetail product={product}></ItemDetail>
       </div> 
       <div className="col-md-6">
       <Count initial = "0" min = "0" max = "10" />
       </div>
     </div> 
  </div>
  </>;
}

export default ItemDetailContainer

