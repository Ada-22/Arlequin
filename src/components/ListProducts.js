import React from 'react';
import {Link} from 'react-router-dom';


function ListProducts({ products }) {
    let titulo = products.map(p => p.category).find(e => e.length > 5);
    return <>
    <h2 className='p-3 danger mt-5 text-center danger'>Nuestros {titulo}...</h2>
    <div className='container'>
      <ul className='row'>{products.map( p => 
        <li id={p.id} className='col-md-4' key={p.id}>
          <Link to={`/detalle/${p.id}`} className="dark">{p.name}</Link>
          <Link to={`/detalle/${p.id}`}><img className='img-fluid imgs mt-3 mb-1'src={process.env.PUBLIC_URL + p.img} alt="product"/><br/></Link>
          <Link to={`/detalle/${p.id}`} className="btn btn-outline-danger mt-4 mb-5"><strong>Ver detalle</strong></Link></li>)}
      </ul>
    </div>
    </>
  }

export default ListProducts;