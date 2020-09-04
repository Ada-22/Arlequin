import React from 'react';
import { Link } from 'react-router-dom';
import { useListContext } from './context/CartContext';

const CartIcon = ()=>{
  const { quantity } = useListContext();  
    return(
        <>
        <li className="nav-item">
            <Link to="/cart" className="nav-link">
              <i className="fa fa-shopping-cart" aria-hidden="true"></i>
              <span className="badge badge-dark badge-pill">{quantity}</span>
            </Link>
          </li>
        </>
    )
}

export default CartIcon