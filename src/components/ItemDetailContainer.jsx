import ItemDetail from "./ItemDetail";
import useItem from "./useItem";

export default function ItemDetailContainer() {
  const itemId = 1;
  const { isLoading, item } = useItem(itemId);

  return (
    <div>
      {isLoading ? <h3>CARGANDO...</h3> : <ItemDetail product={item} />}
    </div>
  );
}