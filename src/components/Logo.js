import React from "react"
import {Link} from 'react-router-dom'


const logo = ()=>{
    return(
        <Link to="/Arlequin" className="navbar-brand"><div className="divLogo"/></Link> 
    );
}

export default logo