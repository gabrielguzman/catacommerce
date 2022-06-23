import {getFirestore } from "firebase/firestore";

export default function useConnection() {
    const db = getFirestore();
    const coleccion = 'productos';

  return (
    {db, coleccion}
  )
}
