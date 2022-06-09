import { type } from '@testing-library/user-event/dist/type';
import React from 'react'
import getProducts from './getProducts';
import ItemCount from './ItemCount'
import ItemList from './ItemList'

export default function ItemListContainer({greeting}) {
  let productos = getProducts();

  return (
    <>
      <div className="box container">
        <div className="row">
             <h4 className='mt-3'>{greeting}</h4>
             <ItemList productos = {productos} />
             <ItemCount stock={5} initial={1} addOn={(contador) =>{
                alert(`Se han agregado: ${contador} productos`);
             }}/>
        </div>
      </div>
    </>
  )
}
