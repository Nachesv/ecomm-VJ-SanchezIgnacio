import React, { useContext } from 'react';
import logo from './shopping-cart.svg';
import './CartWidget.css'
import { CartContext } from '../../context/CartContext';



export const CartWidget = () =>{

  const { cart } = useContext(CartContext);

  return( 
    <div>
      <img src={logo} alt="Logo" className="carrito" style={{maxHeight: '30px'}}/>   
      

      {cart.totalItems && (
        <span className="notification"> {cart.totalItems}</span>
      )}
    </div>
    
  );
}
