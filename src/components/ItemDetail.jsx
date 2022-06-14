import React from 'react'
import ItemCount from './ItemCount'

export default function ItemDetail({product, setCantidad}) {
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
                        <div class="alert alert-info" role="alert">
                            <h3>Descripción del producto</h3>
                            {product.descripcion}
                        </div>
                        <div className='text-center alert alert-info'>
                            <ItemCount stock={5} initial={1} addOn={(contador) =>{
                                alert(`Se han agregado: ${contador} productos`);
                                setCantidad(contador);
                            }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
  )
}