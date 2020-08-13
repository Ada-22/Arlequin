import React from "react"

const searcher = ()=>{
    return(
        <form className="form-inline my-2 my-lg-0">
           <input className="form-control mr-sm-2" type="search" placeholder="Buscar...." aria-label="Search"/>
           <button className="btn btn-outline-danger my-2 my-sm-0" type="submit"><strong>BUSCAR</strong></button>
       </form>
    );
}

export default searcher