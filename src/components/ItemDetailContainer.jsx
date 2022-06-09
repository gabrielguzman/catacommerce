import ItemDetail from './ItemDetail'
import GetITem from './getItem';

export default function ItemDetailContainer() {
    let resultado = GetITem();
    console.log(resultado);
    
    return (
    <div>
        { (resultado.id ?? null ) ? <ItemDetail product = {resultado}/> : <h3>CARGANDO...</h3>}
    </div>
  )
}
