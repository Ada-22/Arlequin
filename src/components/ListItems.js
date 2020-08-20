import React, { useEffect, useState } from 'react';
import productStore from './Product-store';



function ProductList({ products }) {
  return <>
  <h2>Disfraces</h2>
  <ul className='row'>
    {products.map((p) => <li className='col-md-2' key={p.id}>{p.name}</li>)}
  </ul>
  </>
}

function Items() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    productStore().then(res => {
      setProducts(res); 
      setLoading(false); 
    });
  }, []);


  return <>
  { loading && <p>Cargando disfraces...</p>}
  <ProductList products={products}></ProductList>
  </>;
}

export default Items