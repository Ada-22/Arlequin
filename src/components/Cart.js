import React from "react"

let artic = [
{ id: 10001, name: 'Disfraz-Arlequin-1', description:'Traje de Arlequin de pana en rombos blancos y negros', precio: 4000}, 
{ id: 10002, name: 'Disfraz-Arlequin-2', description:'Traje de Arlequin de pana en rombos blancos y negros', precio: 3000}, 
{ id: 10003, name: 'Disfraz-Arlequin-3', description:'Traje de Arlequin de pana en rombos rojos y negros', precio: 7000}, 
{ id: 10004, name: 'Disfraz-Arlequin-4', description:'Traje de Arlequin de pana en rombos verdes y negros', precio: 5000}, 
{ id: 10005, name: 'Disfraz-Arlequin-5', description:'Traje de Arlequin de pana en rombos plateados y negros', precio: 2000}, 
{ id: 10006, name: 'Disfraz-Arlequin-6', description:'Traje de Arlequin de pana en rombos blancos y rojos', precio: 6000}];

const Total =({prod})=>{
   let sum = 0;
   artic.forEach(element => {
       sum += element.precio
   });
return <p className="ml-5">Total $ {sum}</p>
}


const Cart = ({prod}) =>{  
return <>
<div className="product">
    <h2>Su compra</h2>
    <ul className='card-md-8 mb-3'>{artic.map((p) => 
        <li className='col-md-12 p-0' key={p.index}><strong>{p.name}</strong><span className="ml-3">Valor= $ {p.precio}</span></li>)}
    </ul>
    <Total/>
    <button className="btn btn-outline-danger mt-3 mb-5">Confirmar compra</button>

    </div>
    </>
}

export default Cart