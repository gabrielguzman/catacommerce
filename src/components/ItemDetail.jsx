import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { MiContexto } from '../context/CartContext';
import ItemCount from './ItemCount';

export default function ItemDetail({product}) {
    
    const {nombre, precio, descripcion} = product;

    const [unidades, setUnidades] = useState(0); //unidades que guardare en mi carrito

    let {setProduct, addItem} = useContext(MiContexto);
    
    function addOn(quantityToAdd) {
        let cantidad = quantityToAdd;
        alert(`Se han agregado: ${cantidad} productos`);
        setUnidades(cantidad);
        setProduct(product);
        //seteo la cantidad para la funcion addOn que luego me servira para condicionar el boton de Agregar, y permitirá que aparezca el boton("Terminar mi compra") con link a /cart 
    }    

    function comprar(){
        addItem({unidades,nombre, precio ,descripcion})
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
                        <div class="alert alert-info" role="alert">
                            <h3>Descripción del producto</h3>
                            {product.descripcion}
                        </div>
                        <div className='text-center alert alert-info'>
                            {unidades > 0 ? <button className="btn btn-primary" onClick={comprar}>Terminar mi compra</button >:<ItemCount stock={product.stock} initial={1} addOn={addOn}/>} 
                        </div>
                        {/* LLamo a ItemCount y le envio props como solicita la diapositiva*/}                       
                    </div>
                </div>
            </div>
        </>
  )
}