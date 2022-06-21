import React, { createContext, useState } from 'react'

export const CartContext = createContext({});

const {Provider} = CartContext;

const MyProvider = ({children}) =>{
    const [cart, setCart] = useState([]);
    
    const addItem = (product, quantity) => {
        const newProduct = {
            ...product,
            quantity
        }
        if(!isInCart(newProduct.id)) {
            setCart([...cart, newProduct]);
        } else {
            const findProduct = (cart.find(item => item.id === newProduct.id));
            const productIndex = cart.indexOf(findProduct);
            const copiaCarrito = [...cart];
            copiaCarrito[productIndex].quantity += quantity;
            setCart(copiaCarrito);
        }
        getItemPrice();
    }

    const isInCart = (id) => {
        return cart.some(p => p.id === id )
    }

    const clearCart = () => {
        setCart([]);
    }

    const getItemQuantity = () => {
        return cart.reduce((acumulator,item) => acumulator += item.quantity, 0);
    }
    
    //revisar
    const removeItem = (id) =>{
        return setCart(cart.filter(item => item.id !== id));
    }
    
    //revisar
    const getItemPrice = () => {
        return cart.reduce((acumulator,item) => acumulator += item.quantity * item.precio,0);
    }

   
    return (
        <Provider value={{ cart, clearCart, removeItem, getItemPrice, addItem, isInCart, getItemQuantity}}>
            {children}
        </Provider>
    )

}
export default MyProvider