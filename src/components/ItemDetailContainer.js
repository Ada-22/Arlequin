import React, {useState, useEffect} from 'react';
import productStore from './Product-store';
import ItemDetail from './ItemDetail';


function ItemDetailContainer({id}) {
    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {      
        productStore().then(res => {
            let prod = res.filter( (p) => p.id === id )
            setProduct(prod[0]); 
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
                img={product.img}
                description={product.description}
                price={product.price}                  
            />}
        </>
    )
}

export default ItemDetailContainer;




































