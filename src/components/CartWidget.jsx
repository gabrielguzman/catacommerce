import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'

export default function CartWidget() {
  return (
    <>
       <FontAwesomeIcon icon={faCartShopping} className="text-white"/>
       <span className="badge badge-light">4</span>
    </>
  );
}


