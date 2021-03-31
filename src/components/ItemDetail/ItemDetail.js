  
import React from 'react'

import "./ItemDetail.css";


export default function ItemDetail({ item }) {
 
    console.log(process.env.PUBLIC_URL + item?.imagen)

    return <>
            <img className="photo" src={process.env.PUBLIC_URL + item?.imagen} alt=""/>
            <h2>{item?.nombre}</h2>
            <p>{item?.descripcion}</p>
            <div>{item?.precio}</div>
  </>;
   
  }