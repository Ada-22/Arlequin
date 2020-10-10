import React, { useEffect, useState } from 'react'
import {getFirestore} from '../firebase'
import ListProducts from './ListProducts'
import {useParams} from "react-router-dom"
import Footer from './Footer'



function ListItems() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { categoryId = undefined } = useParams();   


    useEffect(() => {
      const db = getFirestore();
      const itemCollection = db.collection('products');
      const categoryItems = itemCollection.where('category', '==', categoryId)
      categoryItems.get().then((querySnapshot) => {
        if(querySnapshot.size === 0) {
            console.log('Error, no hay resultados');
        }
        setProducts(querySnapshot.docs.map(doc => ({...doc.data(), id: doc.id}))); 
    }).catch((error) => {
        console.log('No existen productos con esta categoria', error);
    }).finally(() => {
        setLoading(false); 
    })

}, [categoryId]);    


  return <>
  { loading && <p>Cargando productos...</p>}
  <ListProducts products={products}></ListProducts>
  <Footer/>
  </>;
}

export default ListItems



    