
import React, {useState, useEffect} from 'react'
import ItemDetail from '../ItemDetail/ItemDetail.js'
import { useParams } from "react-router-dom";
import {getFirestore} from '../../firebase';

const getItems = (id) => { /* Esta función debe retornar la promesa que resuelva con delay */ 
    const db = getFirestore();
    const itemsCollection = db.collection('items')
    
    const item = itemsCollection.doc(id) 
    return item.get();
}

export default function ItemDetailContainer() {
    const [item, setItem] = useState(null);
    const { itemId } = useParams();
    useEffect(() => {
      getItems(itemId).then((res) => {
        if (res.exists) {
          setItem({id:res.id,...res.data()});
        }
      });
      return;
    }, [itemId]);
    console.log('existe?');
    
     return <> 
     <ItemDetail item={{id: itemId, ...item}} />
     </>/* JSX que devuelva un ItemDetail (desafío 6b) */
    }


