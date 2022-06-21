import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { CartContext } from '../context/CartContext';
import {useContext} from 'react';
import { Link } from 'react-router-dom';


export default function CartWidget() {
  const {getItemQuantity} = useContext(CartContext);

  return (
       <Link to={'/cart'} className="nav-link">
           
          <FontAwesomeIcon icon={faCartShopping} className="text-white"/>
          <span className="badge badge-light">{getItemQuantity() > 0 && getItemQuantity()}</span>
          
       </Link>
  );
}


