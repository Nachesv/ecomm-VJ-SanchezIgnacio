
import React, {useState, useEffect} from 'react'
import ItemDetail from '../ItemDetail/ItemDetail.js'
import { useParams } from "react-router-dom";
import productList from "./productList";


export default function ItemDetailContainer() {
  const [item, setItem] = useState([])
    
  const {itemId} = useParams()

  useEffect(() => {
  const promesa = new Promise((resolve) =>
  
  setTimeout(() => {

      resolve (productList.find((product) => product.id === parseInt(itemId)));
  }, 2000)
  );
  promesa.then((product) => {
  setItem(product);
  });
  },);
    
     return <ItemDetail item={item} />
    }


