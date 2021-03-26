  
import React from 'react'
import img from './dualshock-negro.jpg';
import "./ItemDetail.css";

export default function ItemDetail({ item }) {
 
    return <>
            <img className="photo" src={img} alt=""/>
            <h2>{item?.nombre}</h2>
            <p>{item?.descripcion}</p>
            <div>${item?.precio}</div>
  </>;
   
  }