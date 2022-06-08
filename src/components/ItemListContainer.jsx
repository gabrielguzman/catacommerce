import React, { useEffect, useState } from 'react'
import { products } from '../data/products'; //traigo desde un js los productos que exporte con el nombre products: export const products
import ItemCount from './ItemCount'
import ItemList from './ItemList'

export default function ItemListContainer({greeting}) {
  const [resultado, setResultado] = useState([]);
  const [error, setError] = useState(false); 
  const [loading, setLoading] = useState(true); /* Luego renderizar error y Loading */

  //Traigo los datos para luego pasarlos al itemList
  useEffect(() => {
    const getProd = new Promise((res, rej) => {
      setTimeout(() => {
        res(products); 
        //res([{id:1,nombre:"computadora",precio:300,imagen:"img/07.jpg"},{id:1,nombre:"tablet",precio:400,imagen:"img/01.jpg"}]) <---otra forma de hacerlo pero opte por traerlos desde un archivo.
      },);
    });

    getProd
    .then((result)=>{
      setResultado(result); //[result[0]]
    })
    .catch((error) => {
      setError(true);
    })
    .finally(()=>{
      setLoading(false);
    })
  }, [])

  console.log(resultado);
  return (
    <>
      <div className="box container">
        <div className="row">
             <h4 className='mt-3'>{greeting}</h4>
             <ItemList productos = {resultado} />
             <ItemCount stock={5} initial={1} addOn={(contador) =>{
                alert(`Se han agregado: ${contador} productos`);
             }}/>
        </div>
      </div>
    </>
  )
}
