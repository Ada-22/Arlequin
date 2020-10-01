import React from 'react'
import {Link} from 'react-router-dom'
import CartIcon from './CartIcon'


const list = ()=>{
    return(
        <ul className='navbar-nav mr-auto'>
          <li className='nav-item dropdown'>
            <a className='nav-link dropdown-toggle' href='#' id='navbarDropdown' role='button' data-toggle='dropdown' aria-haspopup='true' aria-expanded='false'>
              Nuestros Diseños
            </a>
            <div className='dropdown-menu py-0' aria-labelledby='navbarDropdown'>
              <Link to='/mascaras' className='dropdown-item'>Máscaras</Link>
              <Link to='/disfraces' className='dropdown-item'>Disfraces</Link>
            </div>
          </li>
          <CartIcon/> 
        </ul>     
    );
}

export default list