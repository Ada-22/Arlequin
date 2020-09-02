import React, { useEffect, useState } from 'react';
import productStore from './Product-store';

function handleClick(e) {
  e.preventDefault();
  let mod = e.target.id;
  return mod
}

function Mascaras({ products }) {
  let mascaras = products.filter(e => e.category === 'mascaras');
  return <>
  <h2 className='p-3 mt-5 text-center danger'>Nuestras Máscaras...</h2>
  <ul className='row'>{mascaras.map((p) => 
    <li onClick = {handleClick} id={p.id} className='col-md-4' key={p.id}>
      <p>{p.name}</p>
      <img className='img-fluid imgs mb-1'src={p.img} alt="product"/><br/>
      <button className="btn btn-outline-danger mt-4 mb-5">Ver detalle</button></li>)}
  </ul>
  </>
}
function ItemsM() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    productStore().then(res => {
      setProducts(res); 
      setLoading(false); 
    });
  }, []);


  return <>
  { loading && <p>Cargando mascaras...</p>}
  <Mascaras products={products}></Mascaras>

  </>;
}

export default ItemsM
