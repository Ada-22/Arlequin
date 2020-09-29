import React, {useState, useEffect} from 'react';
import {getFirestore} from '../firebase';
import ItemDetail from './ItemDetail';
import {useParams} from "react-router-dom";

function ItemDetailContainer() {
    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(true);
    const { id = undefined } = useParams();   
    
    useEffect(() => {
        const db = getFirestore();
        const itemCollection = db.collection('productos');
        const product = itemCollection.doc(id)
    
        product.get().then((doc) => {
            setProduct( {id: doc.id, ...doc.data() });
        }).catch((error) => {
            console.log('Error buscando producto', error);
        }).finally(() => { 
            setLoading(false);
        });     
    }, [id]); 
    
    return (
        <>
            { loading && <p>Cargando detalle...</p> }

            { !loading && <ItemDetail
                key={product.id}
                id={product.id}
                category={product.category}
                name={product.name}
                img={process.env.PUBLIC_URL + product.img}
                description={product.description}
                price={product.price}                  
            />}
        </>
    )
}

export default ItemDetailContainer;




































