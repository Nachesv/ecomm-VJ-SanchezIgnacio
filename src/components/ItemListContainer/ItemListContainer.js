import React from "react";
import { ItemCount } from "../ItemCount";
import productList from "./productList";
import  ItemList  from "../ItemList/ItemList";

export const ItemListContainer = () => {
  const [productos, setProductos] = React.useState([]);

  React.useEffect(() => {
    const promesa = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(productList);
      }, 2000);
    });

    promesa.then((resolve) => {
        setProductos(resolve)
    } )
  }, []);


  return (
    <div className="itemListContainer">
      <h1>Aqui ira la lista de items!</h1>
      <ItemList productos={productos}/>
      
    </div>
  );
};
