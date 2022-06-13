import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'

export default function CartWidget({cantidad}) {
  return (
    <>
       <FontAwesomeIcon icon={faCartShopping} className="text-white"/>
       <span className="badge badge-light">{cantidad}</span>
    </>
  );
}


