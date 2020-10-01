import React, { useEffect, useState } from 'react'
import {getFirestore} from '../firebase'
import ListProducts from './ListProducts'
import Footer from './Footer'



function ItemsM() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
 
  useEffect(() => {
    const db = getFirestore();
    const itemCollection = db.collection('productos');
    const mascaras = itemCollection.where('category', '==', 'máscaras').limit(6);

    mascaras.get().then((querySnapshot) => {
        if(querySnapshot.size === 0) {
            console.log('No existen productos con la categoria mascaras')
        }
        setProducts(querySnapshot.docs.map(doc => ({...doc.data(), id: doc.id}))); 
    }).catch((error) => {
        console.log('Error buscando categorias', error);
    }).finally(() => {
        setLoading(false); 
    })              
}, []);

  return <>
  { loading && <p>Cargando mascaras...</p>}
  <ListProducts products={products}></ListProducts>
  <Footer/>
  </>;
}

export default ItemsM
