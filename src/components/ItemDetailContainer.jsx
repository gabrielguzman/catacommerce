import ItemDetail from "./ItemDetail";
import useItem from "./useItem";
import { useParams } from 'react-router-dom';

export default function ItemDetailContainer() {
  const {id} = useParams(); //paso parametro a mi hook para luego filtrar el item
  const { isLoading, item } = useItem(id);

  return (
    <div>
      {isLoading ? <h3>CARGANDO...</h3> : <ItemDetail product={item} />}
    </div>
  );
}