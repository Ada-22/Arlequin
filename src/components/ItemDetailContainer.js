import React, {useState, useEffect} from 'react'
import {getFirestore} from '../firebase'
import ItemDetail from './ItemDetail'
import {useParams} from 'react-router-dom'
import {Link} from 'react-router-dom'


function ItemDetailContainer() {
    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const { id = undefined } = useParams();   
    
    useEffect(() => {
        const db = getFirestore();
        const itemCollection = db.collection('productos');
        const product = itemCollection.doc(id)
    
        product.get().then(doc => {
            if(!doc.exists) {
                setError(true);
                return;
            }
            setProduct( {id: doc.id, ...doc.data() });
        }).catch((error) => {
            console.log('Error buscando producto', error);
        }).finally(() => { 
            setLoading(false);
        });     
    }, [id]); 
    
    return (
        <>  { loading && <p>Cargando detalle...</p> }
            { error && <div className='container'>
                    <div className='py-5 text-center mt-5'>
                        <h4 className='mt-5'>El producto no existe en nuestra Tienda de E-commerce.</h4>
                        <Link className='btn btn-outline-danger m-3' to={`/`}><strong>Volver a Home</strong></Link>
                    </div>
                </div> 
            }
            { !loading && !error && <ItemDetail
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




































