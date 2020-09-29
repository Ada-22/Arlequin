import React, {useState}  from 'react';
import Cart from './Cart';
import {Link } from 'react-router-dom';
import { useListContext } from './context/CartContext';
import {getFirestore} from '../firebase';
import * as firebase from 'firebase/app';
import 'firebase/firestore';

function FieldForm({inputLabel, nameField, style, type, id, placeholder, valueInput, onChange}) {
    return (
        <>
            <div className="col-sm-6">
                <label htmlFor={inputLabel} className="form-label" style={style}>{nameField}</label>
                <input type={type} value={valueInput} className="form-control" id={id} placeholder={placeholder} required onChange={onChange}></input>
            </div>
        </>
    )
}

function Form() {
    const { list, cleanList, totalPrice } = useListContext();   
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [emailConfirm, setEmailConfirm] = useState(''); 
    const [comentarioPedido, setComentarioPedido] = useState('');   
    const [orderId, setOrderId] = useState(null);
    const [sent, setSent] = useState(false);

    const labelStyle = { paddingTop: '10px' }    

    function onNameChange(event) {setName(event.target.value)}
    function onPhoneChange(event) {setPhone(event.target.value)}  
    function onEmailChange(event) {setEmail(event.target.value)}
    function onEmailConfirmChange(event) {setEmailConfirm(event.target.value)}
    
    async function createOrder() {
        setSent(true);
        //Creo mis objetos buyer e items
        const object = { name, phone, email, comentarioPedido }
        const items = list.map( p => ({ id: p.id, name: p.name, quantity: p.count, subtotal: p.price * p.count }) )
        //Creo nueva orden en colección de Firestore
        const db = getFirestore();
        const orders = db.collection('ordenes');
        const newOrder = { object, items, date: firebase.firestore.Timestamp.fromDate(new Date()), totalPrice, estadoOrder: 'creada'}
        //Obtengo el ID de la order
        try {
        const {id} = await orders.add(newOrder);
        setOrderId(id); //Success
        cleanList();
        } catch(err) {
            console.log('Error'); //Error
        }
    }    

    if(orderId) {
        return <>
                <div className="container">
                    <div className="py-5 text-center">
                        <h2>Compra realizada exitosamente.<br/>El ID de tu orden es {orderId}</h2>
                        <Link className="btn btn-outline-danger m-3" to={`/`}>Volver a Home</Link>                  
                    </div>
                </div>   
        </>
    }

    return <>
            <div className="container">
                <div className="text-center py-5 mt-5">
                    <h4 className="mt-5">Completá el formulario con tus datos para confirmar la compra.</h4>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <form>
                            <div className="row g-3">
                                <FieldForm inputLabel="inputName" nameField="Nombre y Apellido" valueInput={name} style={{ paddingTop: '5px'}} type="text" id="name" placeholder="Nombre y Apellido" onChange={onNameChange}/>
                                <FieldForm inputLabel="inputPhone" nameField="Teléfono" valueInput={phone} style={labelStyle} type="number" id="phone" placeholder="1568983561" onChange={onPhoneChange}/>                                               
                                <FieldForm inputLabel="inputEmail" nameField="Email" valueInput={email} style={labelStyle} type="email" id="email" placeholder="tumail@ejemplo.com" onChange={onEmailChange}/>
                                <FieldForm inputLabel="inputConfirmEmail" nameField="Confirmar Email" valueInput={emailConfirm} style={labelStyle} type="email" id="emailconfirm" placeholder="tumail@ejemplo.com" onChange={onEmailConfirmChange}/>                
                            </div>                                              
                            <hr className="my-4"></hr>
                            <button className="btn btn-outline-danger btn-lg btn-block" type="submit" disabled={ !name || !phone || !email || (emailConfirm !== email) || sent } onClick={createOrder} style={{ marginBottom: '30px'}}>
                                Confirmar
                            </button>
                        </form>
                    </div>
                </div>
            </div>                        
        </>
}

export default Form;
