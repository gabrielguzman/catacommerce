import { collection, getDocs, query, where } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemList from './ItemList';
import useConnection from "./useConnection";


export default function ItemListContainer({greeting}) {
  const {id} = useParams(); //paso parametro a mi hook para luego filtrar las categorias
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);


  // const db = getFirestore();
  // const coleccion = 'productos';
  const {db, coleccion} = useConnection();
  const itemsCollection = collection(db, coleccion);

  useEffect(() => {
    if (id) {
      const q = query(collection(db,coleccion), where("categoria","==", id));
      getDocs(q).then((res)=>{
        setItems(res.docs.map(doc=> ({id: doc.id, ...doc.data() })))
        setIsLoading(false);
      })
    }else{
      getDocs(itemsCollection).then((res)=>{
        setItems(res.docs.map(doc=> ({id: doc.id, ...doc.data() })))
        setIsLoading(false);
      })
    }
  }, [id])

  return (
    <>
      <div className="box container">
        <div className="row">
             <h4 className='mt-3'>{greeting}</h4>
             {isLoading ? <h4>cargando</h4> : <ItemList items ={items}/>}
        </div>
      </div>
    </>
  )
}
