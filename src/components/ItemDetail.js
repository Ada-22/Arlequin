import React from "react"
import { useParams } from "react-router-dom";

const { id } = useParams();
    
  useEffect(() => {
      console.log('Mounted ItemDetail')
      return () => {
          console.log('Dismounted ItemDetail');
      };          
  }, []);  



function ItemDetail({ product }) {
    

    let prod = product.filter(p => p.id === {id});
    return <>
    <h2>Detalle</h2>
    <ul>{prod.map((p) => 
      <li key={p.id}>
        <p className='col-md-12 p-0' key={p.id}><strong>{p.name}</strong><br/><span>{p.description}</span><br/>
        <span>Valor= $ {p.precio}</span></p>
        <img className='img-fluid img_1 mb-1'src={p.img} alt="product"/><br/></li>)}
    </ul>
    </>
  }

export default ItemDetail