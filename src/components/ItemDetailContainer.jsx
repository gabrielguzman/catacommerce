import React, { useEffect, useState } from 'react'
import ItemDetail from './ItemDetail'
import { products } from '../data/products'


export default function ItemDetailContainer() {
    const [resultado, setResultado ] = useState({});

    useEffect(() => {
        const getProduct = new Promise((res, rej) => {
          setTimeout(() => {
            res(products[0])/* id: 1,
            nombre: "Apple iPhone 13 Pro Max",
            precio: "200.000",
            imagen: "img/01.jpg",
            colores: "Verde · Rosa · Azul · Azul medianoche · Blanco estelar" */ 
          },2000);
        });
    
        getProduct
        .then((result)=>{
          setResultado(result);
        })
      }, [])
    
    console.log(resultado);
    return (
    <div>
        <ItemDetail product = {resultado} />
    </div>
  )
}
