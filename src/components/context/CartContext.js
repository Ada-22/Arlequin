import React, { useContext, useState }  from "react"

export const CartContext = React.createContext ([]);

export const useListContext = () => useContext(CartContext);

export function ListProvider({ value, initial,  min, max, children }) {

    const [list, setList] = useState(value || []);
    const [contador, setContador] = useState(initial);
  
    const add = () => {
        if(contador < max){
            setContador(contador + 1);
        }
    }
    
    const subtract = () => {
        if(contador> min){
            setContador(contador - 1);
        }
    }
  
    function onContadorChange(event) {
      setContador(event.target.value)
    }  
  
    function addItem(newItem) {
        const itemList = [...list, newItem];
        setList(itemList);
    };
  
    function cleanList() {
      setList([]);
    }
  
    return <CartContext.Provider value={{ list, add , subtract, contador , onContadorChange, addItem, quantity: list.length, cleanList}}>
      {children}
    </CartContext.Provider>
  } 