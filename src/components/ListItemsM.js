import React, { useEffect, useState } from 'react';
import productStore from './Product-store';
import {Link} from 'react-router-dom';


function Mascaras({ products }) {
  let mascaras = products.filter(e => e.category === 'mascaras');
  return <>
  <h2 className='p-3 mt-5 text-center danger'>Nuestras Máscaras...</h2>
  <div className='container'>
    <ul className='row'>{mascaras.map((p) => 
      <li id={p.id} className='col-md-4' key={p.id}>
        <p>{p.name}</p>
        <img className='img-fluid imgs mb-1'src={p.img} alt="product"/><br/>
        <Link to='/detalle' className="btn btn-outline-danger mt-4 mb-5">Ver detalle</Link></li>)}
    </ul>
  </div>
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
