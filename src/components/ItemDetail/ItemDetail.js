  
import React,{useState,useContext} from 'react'
import {ItemCount} from '../ItemCount'
import "./ItemDetail.css";
import {Link} from 'react-router-dom';
import { CartContext } from "../../context/CartContext"

export default function ItemDetail({ item }) {
    const [count, setCount] = useState(0)

    const {addItem} = useContext(CartContext);

    const addHandler = (contador)=>{
        addItem(item, contador)
        setCount(contador)
    }
    

    return <>

            
            <img className="photo" src={item?.image} alt=""/>
            <h2>{item?.title}</h2>
            <p>{item?.description}</p>
            <div>{item?.price}</div>
            { count === 0 ?
                    <ItemCount stock={item?.stock} initial={1} onAdd={addHandler} />
                        :
                        <Link to='/cart'>
                            <button>Terminar mi compra</button>
                        </Link> 

            }
  </>;
   
  }