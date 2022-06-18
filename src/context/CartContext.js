import React, { createContext, useState } from 'react'

export const CartContext = createContext({});

const {Provider} = CartContext;

const MyProvider = ({children}) =>{
    const [cart, setCart] = useState([]);
    
    console.log(cart);

    const isInCart = (id) => {
        console.log(cart.some(item => item.id === id));
    }
    
    const addItem = (product, quantity) => {
        const newItem = {
            ...product,
            quantity
        }
        if (isInCart(newItem.id)) {
            const findProduct = cart.find(item => item.id === newItem.id);
            const productIndex = cart.indexOf(findProduct);
            const copiaCarrito = [...cart];
            copiaCarrito[productIndex].quantity += quantity;
            setCart(copiaCarrito);
        }else{
            setCart([...cart, newItem]);
        }
    }

    const clearCart = () => {
        setCart([]);
    }

    const removeItem = (id) =>{
        return setCart(cart.filter(item => item.id !== id));
    }

    const getItemPrice = () => {
        return cart.reduce((acu,item) => acu += item.quantity * item.price,0)
    }

    const getItemQuantity = () => {
        return cart.reduce((acu,item) => acu += item.quantity, 0)
    }

    return (
        <Provider value={{ cart, clearCart, removeItem, getItemPrice, addItem, isInCart, getItemQuantity}}>
            {children}
        </Provider>
    )

}
export default MyProvider