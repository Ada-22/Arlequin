import React from 'react'
import Count from './Count'
import { useListContext } from './context/CartContext'

function ItemDetail ({ id, img, name, description, price }) {
    const { addItem, count } = useListContext();     
    return (
        <>
        <div className='container product mt-5 pt-5'>
          <div className='row text-center'> 
            <div className='col-md-6'>
              <ul>
                <li key={id}>
                  <p className='p-0' key={id}><strong>{name}</strong><br/><span>{description}</span><br/>
                  <span>Valor= $ {price}</span></p>
                  <img className='img-fluid img_1 mb-1'src={img} alt='product'/><br/>
                </li>
              </ul>
            </div> 
            <div className='col-md-6'>
              <Count onAdd={() => addItem({id: id, name: name, price: price, count: count })}/>
            </div>
         </div> 
       </div>    
      </>
    )
}
export default ItemDetail


























