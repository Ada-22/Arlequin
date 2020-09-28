import React, { useContext, useState }  from "react"

export const CartContext = React.createContext ([]);

export const useListContext = () => useContext(CartContext);

export function ListProvider({ value, initial,  min, max, children }) {

    const [list, setList] = useState(value || []);
    const [count, setCount] = useState(initial);
    
    const add = () => {
        if(count < max){
            setCount(count + 1);
        }
    }
    
    const subtract = () => {
        if(count> min){
            setCount(count - 1);
        }
    }
  
    function onCountChange(event) {
      setCount(event.target.value)
    }  
  
    function addItem(newItem) {
        const itemList = [...list, newItem];
        setList(itemList);
        setCount(initial);
    };
  
    function clean() {
      setList([]);
    }

    function totalProducts(list){
      let result = 0;
      list.map(i => result += i.count)
      return result
    }

    function total(list) {
      let totalPrice = 0;
      list.map ( (i) => totalPrice += i.price * i.count )
      return totalPrice
    }
  
    return <CartContext.Provider value={{ list, add , subtract, count , onCountChange, addItem, quantity: totalProducts(list), clean, total: total(list)}}>
      {children}
    </CartContext.Provider>
  } 