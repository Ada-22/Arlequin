import React, { useEffect, useState } from 'react'
import {getFirestore} from '../firebase'
import ListProducts from './ListProducts'
import Footer from './Footer'



function ItemsD() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

    useEffect(() => {
      const db = getFirestore();
      const itemCollection = db.collection('productos');
      const distraces = itemCollection.where('category', '==', 'disfraces').limit(6);

      distraces.get().then((querySnapshot) => {
          if(querySnapshot.size === 0) {
              console.log('No existen productos con la categoria disfraz')
          }
          setProducts(querySnapshot.docs.map(doc => ({...doc.data(), id: doc.id}))); 
      }).catch((error) => {
          console.log('Error buscando categorias', error);
      }).finally(() => {
          setLoading(false); 
      })              
  }, []);
  


  return <>
  { loading && <p>Cargando disfraces...</p>}
  <ListProducts products={products}></ListProducts>
  <Footer/>
  </>;
}

export default ItemsD 