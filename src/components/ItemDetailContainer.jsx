import React, { useEffect, useState } from 'react'
import ItemDetail from './ItemDetail'
import GetITem from './getItem';
import { useParams } from 'react-router-dom';
import GetProducts from './getProducts';


export default function ItemDetailContainer() {
  const [resultado,setResultado] = useState([]);  
  const {id} = useParams();

    let productos = GetProducts();
    
    useEffect(() => {
      if (id) {
        let productoFiltrado = productos.filter((product) => product.id==id);
        setResultado(productoFiltrado)
      }
    }, [id,productos])
    
    return (
    <div>
        { (resultado[0] !== undefined ) ? <ItemDetail product = {resultado[0]}/> : <h3>El producto no existe...</h3>}
    </div>
  )
}
