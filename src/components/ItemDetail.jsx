import { useContext, useState } from 'react';
import { CartContext } from '../context/CartContext';
import ItemCount from './ItemCount';

export default function ItemDetail({product}) {
    // const {id, nombre, precio, descripcion} = product;
    const [quantity, setQuantity] = useState(); //unidades que guardare en mi carrito

    let {addItem, isInCart} = useContext(CartContext);
    
    function addOn(contador){
        alert(`Se han agregado: ${contador} productos`);
        console.log(contador);
        setQuantity(contador);
        console.log(quantity);
        addItem(product, quantity);
        isInCart(product.id)
    }    

    function comprar(){
        setQuantity(10);
        alert(quantity);
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
                        <div>
                            
                        <ItemCount stock={product.stock} initial={1} addOn={addOn}/> 
                        </div>
                        {/* LLamo a ItemCount y le envio props como solicita la diapositiva*/}                       
                    </div>
                </div>
            </div>
        </>
  )
}