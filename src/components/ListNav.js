import React from "react"
import {Link} from "react-router-dom"
import CartIcon from "./CartIcon"



const list = ()=>{
    return(
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <a className="nav-link" href="#">Contacto</a>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Productos
            </a>
            <div className="dropdown-menu py-0" aria-labelledby="navbarDropdown">
              <Link to="/mascaras" className="dropdown-item">Máscaras</Link>
              <Link to="/disfraces" className="dropdown-item">Disfraces</Link>
            </div>
          </li>
          <li class="nav-item">
            <Link to="/user" class="nav-link"><i className="fas fa-user"></i></Link>
          </li>
          <CartIcon/>
        </ul>     
    );
}

export default list