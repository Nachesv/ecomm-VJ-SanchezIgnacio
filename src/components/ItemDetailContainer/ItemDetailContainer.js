
import React, {useState, useEffect} from 'react'
import ItemDetail from '../ItemDetail/ItemDetail.js'


const getItems = () => {  


    return new Promise((resolve)=>{
      setTimeout(() => {
        resolve(    {
            imagen: "././images/dualshock-negro.jpg",
            nombre: "DualShock 4",
            precio: "$8079",
            descripcion: "Joystick de Playstation 4",
            id: 1,
          });
      }, 2000);
    });
}

export default function ItemDetailContainer() {
    const [item, setItem] = useState(null)
    useEffect(() => {
        getItems().then((res)=> setItem(res))
        return;
    }, [])

    
     return <ItemDetail item={item} />
    }


