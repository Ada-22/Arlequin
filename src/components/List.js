import React from "react"

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
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a className="dropdown-item" href="#">Máscaras</a>
                  <a className="dropdown-item" href="#">Disfraces</a>
                </div>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#"><i className="fas fa-user"></i></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#"><i className="fa fa-shopping-cart" aria-hidden="true"></i></a>
              </li>
            </ul>
    );
}

export default list