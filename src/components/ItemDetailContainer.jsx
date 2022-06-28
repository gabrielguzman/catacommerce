
import { doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import ItemDetail from "./ItemDetail";
import useConnection from "./useConnection";


export default function ItemDetailContainer() {
  const {id} = useParams(); //paso parametro a mi hook para luego filtrar el item
  const [item, setItem] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const {db, coleccion} = useConnection();
  //const idDocumento = 'fUxqjxavSSqrHcxeMk1w'
  
  // Traer un producto especifico
  useEffect(() => {
    const productRef = doc(db, coleccion, id);
    getDoc(productRef).then((res)=>{
      if (res.exists()) {
        setItem({...res.data(), id: res.id })
        setIsLoading(false);
      }else{
        console.log('no se encontro el documento');
      }
    })
  }, [id])


  return (
    <div>
      {isLoading ? <h3>CARGANDO...</h3> : <ItemDetail product={item} />}
    </div>
  );
}