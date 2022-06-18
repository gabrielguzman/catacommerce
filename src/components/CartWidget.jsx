import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';

export default function CartWidget() {
  const {getItemQuantity} = useContext(CartContext);

  return (
    <>
       <FontAwesomeIcon icon={faCartShopping} className="text-white"/>
       <span className="badge badge-light">{getItemQuantity()}</span>
    </>
  );
}


