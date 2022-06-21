import React from 'react'
import { useState } from 'react';
import ItemCount from './ItemCount';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import { useContext } from 'react';

export default function ItemDetail({product}) {
    const [unidades, setUnidades] = useState(0); //unidades de mi producto que guardare en mi carrito
    
    let {addItem, cart} = useContext(CartContext);

    function addOn(quantityToAdd) {
        //alert(`Se han agregado: ${quantityToAdd} productos`);
        setUnidades(quantityToAdd);
    }
    
    return (
        <>
            <div className="container bg-light pb-3 box-1 mt-5">
                <div className="row"> 
                    <h3 className='mt-3'>Detalle del Producto</h3>
                    <div className="col-lg-6 col-sm-12 mt-3">
                        <div className="card">
                            <img className="card-img-top" src={product.imagen} alt="product" />
                        </div>
                    </div>
                    <div className="col-lg-6 col-sm-12 mt-3">
                        <div className="alert alert-info">
                            <h4 className='text-start'>Nombre: {product.nombre}</h4>
                            <h4 className='text-start'>Categoria: {product.categoria}</h4>
                            <h4 className='text-start'>Precio: ${product.precio}</h4>
                        </div> 
                        <div className="alert alert-info" role="alert">
                            <h3>Descripción del producto</h3>
                            {product.descripcion}
                        </div>
                        <div className='text-center alert alert-info'>
                            {unidades > 0 ? 
                            <div>
                                <p className='fw-bolder'>*Esta por comprar: Producto: {product.nombre} - Unidades: {unidades}</p>
                                <Link to={'/cart'} className="btn btn-danger" 
                                onClick={()=>addItem(product,unidades)}>Comprar</Link>
                            </div>
                            :<ItemCount stock={product.stock} initial={1} addOn={addOn}/>} 
                        </div>
                        <div>
                            
                        </div>
                        {/* LLamo a ItemCount y le envio props como solicita la diapositiva*/}                       
                    </div>
                </div>
            </div>
        </>
  )
}