import React, { useEffect, useState } from "react";

import productList from "./productList";
import  ItemList  from "../ItemList/ItemList";
import { useParams } from "react-router-dom"; 

import {getFirestore} from '../../firebase';

export const ItemListContainer = () => {
  const [productos, setProductos] = React.useState([]);

  const {categoryId} = useParams()

  useEffect(()=>{

    const db = getFirestore();
    const itemsCollection = db.collection('items') 
    const filtrado = itemsCollection
       .where('categoria','==', categoryId).limit(2)
    const prom =  filtrado.get();


    prom.then((snaptshot)=>{
      console.log('se consultaron los datos');
      console.log(snaptshot);

      if(snaptshot.size > 0){
        console.log(snaptshot.docs.map(doc => doc.data()))

        console.log(snaptshot.docs.map(doc => doc.id))


        setProductos(snaptshot.docs.map(doc => {
          return {id:doc.id,  ...doc.data()}
        }
          ))
      }
      
    })

  },[categoryId])



  return (
    <div className="itemListContainer">
      <h1>Aqui ira la lista de items!</h1>
      <ItemList productos={productos}/>
      
    </div>
  );
};
