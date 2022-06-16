import React, { createContext, useState } from 'react'

export const MiContexto = createContext({});

export default function CartContext({children}){
    const [cart, setCart] = useState([]);
    const [product, setProduct] = useState();

    const addItem = (product) => {
        setCart([...cart, product])
    }
    console.log(cart);

    const clearCart = () => {
        setCart([]);
    }

    return (
        <MiContexto.Provider value={{cart, setCart, product, setProduct, addItem}}>
            {children}
        </MiContexto.Provider>
    )

}