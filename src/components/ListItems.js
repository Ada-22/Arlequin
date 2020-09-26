import React, { useEffect, useState } from 'react';
import productStore from './Product-store';
import {Link} from 'react-router-dom';


function Disfraces({ products }) {
  let disfraces = products.filter(e => e.category === 'disfraces');
  return <>
  <h2 className='p-3 danger mt-5 text-center danger'>Nuestros Disfraces...</h2>
  <div className='container'>
    <ul className='row'>{disfraces.map((p) => 
      <li id={p.id} className='col-md-4' key={p.id}>
        <Link to={`/detalle/${p.id}`} className="dark">{p.name}</Link>
        <Link to={`/detalle/${p.id}`}><img className='img-fluid imgs mt-3 mb-1'src={p.img} alt="product"/><br/></Link>
        <Link to={`/detalle/${p.id}`} className="btn btn-outline-danger mt-4 mb-5"><strong>Ver detalle</strong></Link></li>)}
    </ul>
  </div>
  </>
}

function ItemsD() {
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
  <Disfraces products={products}></Disfraces>
  </>;
}

export default ItemsD 