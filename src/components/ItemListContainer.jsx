import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import getProducts from './getProducts';
// import ItemCount from './ItemCount'
import ItemList from './ItemList'

export default function ItemListContainer({greeting}) {
  const {id} = useParams();
  const [resultado,setResultado] = useState();

  let productos = getProducts();

  useEffect(() => {
    if (id) {
      let productosFiltrados = productos.filter((product) => product.categoria.localeCompare(id,undefined,{sensitivity:'base'})===0);
      setResultado(productosFiltrados);
    }    
  },[id, productos])

  return (
    <>
      <div className="box container">
        <div className="row">
             <h4 className='mt-3'>{greeting}</h4>
             {resultado !== undefined ? <ItemList productos = {resultado}  /> : <ItemList productos = {productos}  />}
             {/* <ItemCount stock={5} initial={1} addOn={(contador) =>{
                alert(`Se han agregado: ${contador} productos`);
             }}/> */} {/*LO PASO A ITEM DETAIL*/}
        </div>
      </div>
    </>
  )
}
