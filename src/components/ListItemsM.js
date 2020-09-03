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
        <Link to={`/detalle/${p.id}`} className="dark">{p.name}</Link>
        <Link to={`/detalle/${p.id}`}><img className='img-fluid imgs mt-3 mb-1'src={p.img} alt="product"/><br/></Link>
        <Link to={`/detalle/${p.id}`} className="btn btn-outline-danger mt-4 mb-5"><strong>Ver detalle</strong></Link></li>)}
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
