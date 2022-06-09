import React from 'react'

export default function ItemDetail({product}) {
  return (
    <>
        <div className='container bg-light pb-3 '>
            <div className="row">
            <h3>Detalle Producto</h3>
                <div className="col-lg-6 mt-3">
                    <div><img src={product.imagen} alt="" /></div>
                </div>
                <div className="col-lg-6 mt-3"> 
                    <div><h4>Nombre: {product.nombre}</h4></div>
                    <div><h4>Categoria: {product.categoria}</h4></div>
                    <div><h4>Precio: ${product.precio}</h4></div>
                </div>
            </div>
        </div>
    </>
    
  )
}
