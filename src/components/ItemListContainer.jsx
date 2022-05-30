import React from 'react'
import '../ItemListContainer.css'

export default function ItemListContainer({greeting}) {
  return (
    <div className="box">
        <h1 class="text-uppercase fst-italic saludo">{greeting}</h1>
    </div>
  )
}
