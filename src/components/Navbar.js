import React from 'react'
import Logo from '../components/Logo'
import List from '../components/ListNav'


const Navbar = ()=>{
    return(
        <nav className='navbar navbar-expand-lg navbar-dark bg-dark fixed-top'>
          <Logo/>
          <h1 className='mr-5 mb-0' style={{fontSize: '16px'}}>Tienda de disfraces</h1>
          <button className='navbar-toggler' type='button' data-toggle='collapse' data-target='#navbarSupportedContent' aria-controls='navbarSupportedContent' aria-expanded='false' aria-label='Toggle navigation'>
            <span className='navbar-toggler-icon'/>
          </button>
          <div className='collapse navbar-collapse' id='navbarSupportedContent'>
          <List/>  
          </div>
        </nav>

    );
}

export default Navbar