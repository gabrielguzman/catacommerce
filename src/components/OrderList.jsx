import React from 'react';
import {
  addDoc,
  collection,
  doc,
  getDocs,
  getFirestore,
  serverTimestamp,
  updateDoc,
} from "firebase/firestore";

import { useEffect } from 'react';
import { useState } from 'react';

export default function OrderList() {
  
  const db = getFirestore();
  const ordersCollection = collection(db, "orders");
  const [orders, setOrders] = useState([]);
  
  useEffect(() => {
    getDocs(ordersCollection).then((res) => {
      setOrders(res.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
    });
  });
/* 
  const renderPedidos = () => {
    return (
      <div className="container">
          {console.log(orders)}
          {orders?.map((order)=>{
              order?.items.map((item)=>{
                <p>{item.nombre}</p>
              })
          })
        }
      </div>
    )
  } */
  return (
    <>
      <div>hola</div>
    </>
  )
}
