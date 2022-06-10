import React from 'react'

export default function ItemDetail({product}) {
  return (
    <>
        <div className="container bg-light pb-3 box-1">
            <div className="row">
                <h3 className='text-danger mt-3'><u>Detalle del Producto</u></h3>
                <div className="col-lg-6 col-sm-12 mt-3">
                    <div className="card">
                        <img className="card-img-top" src={product.imagen} alt="product" />
                    </div>
                </div>
                <div className="col-lg-6 col-sm-12 mt-3"> 
                    
                    <h4 className='mt-3 text-start'>Nombre: {product.nombre}</h4>
                    <h4 className='text-start'>Categoria: {product.categoria}</h4>
                    <h4 className='text-start'>Precio: ${product.precio}</h4>
                </div>
            </div>
        </div>
    </>
  )
}
