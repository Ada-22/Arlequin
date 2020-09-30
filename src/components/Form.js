import React, {useState}  from 'react'
import {Link } from 'react-router-dom'
import { useListContext } from './context/CartContext'
import {getFirestore} from '../firebase'
import * as firebase from 'firebase/app'
import 'firebase/firestore'


function Field({inputLabel, nameField, style, type, id, placeholder, valueInput, onChange}) {
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
    const { quantity, list, clean, total } = useListContext();   
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [emailConfirm, setEmailConfirm] = useState('');  
    const [orderId, setOrderId] = useState(null);
    const [sent, setSent] = useState(false);

    const onNameChange = event => {setName(event.target.value)}
    const onPhoneChange = event => {setPhone(event.target.value)}  
    const onEmailChange= event => {setEmail(event.target.value)}
    const onEmailConfirmChange= event => {setEmailConfirm(event.target.value)}
    
    async function createOrder() {
        setSent(true);
        const object = { name, phone, email }
        const items = list.map( p => ({ id: p.id, name: p.name, quantity, subtotal: p.price * p.count }) )
        const db = getFirestore();
        const orders = db.collection('ordenes');
        const newOrder = { object, items, date: firebase.firestore.Timestamp.fromDate(new Date()), total}
        try {
        const {id} = await orders.add(newOrder);
        setOrderId(id);
        clean();
        } catch(err) {
            console.log("Ha ocurrido un error creando la orden de compra")
        }
    }    

    if(orderId) {
        return <>
                <div className="container">
                    <div className="py-5 text-center mt-5">
                        <h2 className="mt-5">¡Gracias por elegirnos!</h2>
                        <h4 className="my-5">La compra se ha realizado exitosamente.</h4>
                        <strong>El ID de tu compra es {orderId}</strong>
                        <p className="danger">Obtenga un descuento de 15% en su próxima compra con este id</p>
                        <Link className="btn btn-outline-danger m-3" to={`/`}><strong>Volver a Home</strong></Link>                  
                    </div>
                </div>   
        </>
    }
    
    return <>
            <div className="container">
                <div className="text-center py-5 mt-5">
                    <h4 className="mt-5">Completa el formulario con tus datos para confirmar la compra.</h4>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <form>
                            <div className="row g-3">
                                <Field inputLabel="inputName" nameField="Nombre y Apellido" valueInput={name} style={{ paddingTop: '5px'}} type="text" id="name" placeholder="Nombre y Apellido" onChange={onNameChange}/>
                                <Field inputLabel="inputPhone" nameField="Teléfono" valueInput={phone} style={{ paddingTop: '10px'}} type="number" id="phone" placeholder="1133768450" onChange={onPhoneChange}/>                                               
                                <Field inputLabel="inputEmail" nameField="Email" valueInput={email} style={{ paddingTop: '10px'}} type="email" id="email" placeholder="mail@ejemplo.com" onChange={onEmailChange}/>
                                <Field inputLabel="inputConfirmEmail" nameField="Confirmar Email" valueInput={emailConfirm} style={{ paddingTop: '10px'}} type="email" id="emailconfirm" placeholder="mail@ejemplo.com" onChange={onEmailConfirmChange}/>              
                            </div>                             
                            <button className="btn btn-outline-danger btn-lg btn-block mt-5" type="submit" disabled={ !name || !phone || !email || (emailConfirm !== email) || sent } onClick={createOrder} style={{ marginBottom: '30px'}}>
                               <strong>Confirmar</strong> 
                            </button>
                        </form>
                    </div>
                </div>
            </div>                        
        </>
}

export default Form;
