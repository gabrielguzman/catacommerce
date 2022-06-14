import React from 'react';
import useProducts from './useProducts';
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';

export default function ItemListContainer({greeting}) {
  const {id} = useParams(); //paso parametro a mi hook para luego filtrar las categorias
  const { isLoading, items } = useProducts(id);


  return (
    <>
      <div className="box container">
        <div className="row">
             <h4 className='mt-3'>{greeting}</h4>
             {isLoading ? <h4>cargando</h4> : <ItemList items ={items}/>}
        </div>
      </div>
    </>
  )
}
