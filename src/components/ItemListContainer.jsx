import React from 'react'
import '../ItemListContainer.css'
import ItemCount from './ItemCount'

export default function ItemListContainer({greeting}) {
  return (
    <div className="box">
         <ItemCount stock={5} initial={1} addOn= {(stock,contador)=>{
            if (stock > 0) {
                alert(`Se han agregado: ${contador} productos`);
            }else{
              alert('No hay productos en stock.');
            }
         }} />
        <h1 class="text-uppercase fst-italic saludo">{greeting}</h1>
    </div>
  )
}
