import React, {useState, useEffect} from 'react'
import {getFirestore} from '../firebase'
import {Link} from 'react-router-dom'
import Footer from './Footer'




function Home() {
    
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        const db = getFirestore();
        const itemCollection = db.collection('"products"');
        const priceItems = itemCollection.where('price', '>', 2000).limit(6);

        priceItems.get().then((querySnapshot) => {
            if(querySnapshot.size === 0) {
                console.log('No existen items de mas de 2000 pesos')
            }
            setProducts(querySnapshot.docs.map(doc => ({...doc.data(), id: doc.id}))); 
        }).catch((error) => {
            console.log('Error buscando productos', error);
        }).finally(() => {
            setLoading(false); 
        })              
        
    }, []);

    return (
        <>
             <div className='App'>
                <header className='App-header'>
                </header>
            </div>
            { loading && <p className='text-center my-5'>Cargando nuestros productos mas vendidos...</p> }
            
            { !loading &&  
            <div className='container'>
              <ul className='row'>{products.map((p) => 
                <li id={p.id} className='col-md-2 text-center mt-4' key={p.id}>
                  <Link to={`/detalle/${p.id}`} className='dark'>{p.name}</Link><br/>
                  <Link to={`/detalle/${p.id}`}><img className='img-fluid imgs mt-3 mb-1'src={process.env.PUBLIC_URL + p.img} alt='product'/><br/></Link>
                  <Link to={`/detalle/${p.id}`} className='btn btn-outline-danger mt-3 mb-1'><strong>Ver detalle</strong></Link></li>)}
              </ul>
            </div>}
            <Footer></Footer>
        </>
    )
}

export default Home;

















































