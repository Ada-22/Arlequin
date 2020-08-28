import React, { useEffect, useState } from 'react';
import productStore from './Product-store';



function ProductList({ products }) {
  function handleClick(e) {
    e.preventDefault();
    let mod = e.target.id;
  }

  return <>
  <h2 className='p-3'>Disfraces</h2>
  <ul className='row'>
{products.map((p) => <li onClick = {handleClick} id={p.id} className='col-md-2' key={p.id}>{p.name}</li>)}
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