import React, { useEffect, useState } from "react";
import {ItemList} from "../ItemList/ItemList.js"
import { useParams } from "react-router-dom"; 
import "./ItemListContainer.css"
import {getFirestore} from '../../firebase';

export default function ItemListContainer() {
  const [items, setItems] = useState([])

  const {categoryId} = useParams()

  let titulo

  useEffect(()=>{

    const db = getFirestore();
    const itemsCollection = db.collection('items') 
    console.log(categoryId)
    let filtrado = itemsCollection
    if (categoryId !== undefined){
      filtrado = itemsCollection
      .where('categoryId','==', categoryId).limit(10);
    } 
    const prom =  filtrado.get();


    prom.then((snaptshot)=>{


      if(snaptshot.size > 0){


        setItems(snaptshot.docs.map(doc => {
          return {id:doc.id,  ...doc.data()}
        }
          ))
      }
      //setItems(resultado)
    })

  },[categoryId])

  if (categoryId === undefined){
    titulo = <h2>Home - Todos los productos</h2>
  } else {
    titulo = <h2>Items de la categoria {categoryId}</h2>
  }

  return (
    <div className="container itemContainer">
      {titulo}
      <ItemList items={items}/>
     
    </div>
  );
}
/*
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
};*/
