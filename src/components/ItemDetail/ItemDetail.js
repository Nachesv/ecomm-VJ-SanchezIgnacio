  
import React,{useState} from 'react'
import {ItemCount} from '../ItemCount'
import "./ItemDetail.css";
import {Link} from 'react-router-dom';

export default function ItemDetail({ item }) {
    const [count, setCount] = useState(0)

    const addHandler = (contador)=>{
        console.log('se agrego un item', contador)
        setCount(contador)
    }
    

    return <>

            {count}
            <img className="photo" src={process.env.PUBLIC_URL + item?.imagen} alt=""/>
            <h2>{item?.nombre}</h2>
            <p>{item?.descripcion}</p>
            <div>{item?.precio}</div>
            { count == 0 ?
                    <ItemCount stock="6" initial="2" onAdd={addHandler} />
                        :
                        <Link to='/cart'>
                            <button>Terminar mi compra</button>
                        </Link> 

            }
  </>;
   
  }