import ItemDetail from './ItemDetail'
import GetITem from './getItem';

export default function ItemDetailContainer() {
    let resultado = GetITem();
    
    return (
    <div>
        { (resultado.id ?? null ) ? <ItemDetail product = {resultado}/> : <h3>CARGANDO...</h3>}
    </div>
  )
}
