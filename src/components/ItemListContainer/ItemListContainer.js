import React from "react";

import productList from "./productList";
import  ItemList  from "../ItemList/ItemList";
import { useParams } from "react-router-dom"; 


export const ItemListContainer = () => {
  const [productos, setProductos] = React.useState([]);

  const {categoryId} = useParams()

  React.useEffect(() => {
    const promesa = new Promise((resolve, reject) => {

      setTimeout(() => {
        if (categoryId) {
            const productsFilter = productList.filter((product) => {
                return product.categoria.toString() === categoryId;
            });
            resolve(productsFilter);
        } else resolve(productList);
        resolve(productList);
        }, 2000);


    });

    promesa.then((resolve) => {
        setProductos(resolve)
    } )
  },);


  return (
    <div className="itemListContainer">
      <h1>Aqui ira la lista de items!</h1>
      <ItemList productos={productos}/>
      
    </div>
  );
};
