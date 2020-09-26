import React from 'react'
import ProductS from './Products';
import {getFirestore} from '../firebase';

const db = getFirestore();
const itemCollection = db.collection('productos');
itemCollection.get().then((querySnapshot) => {
  if (querySnapshot.size === 0){
    console.log('no hay items');
  }
  const info = querySnapshot.docs.map(doc => doc.data());
  console.log(info);

});


const Home = ()=>{

    return(
        <div className='App'>
          <header className='App-header'>
          </header>
        <ProductS/>
      </div>
    );
}

export default Home