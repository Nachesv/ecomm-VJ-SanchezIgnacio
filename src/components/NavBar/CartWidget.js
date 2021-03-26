import React from 'react';
import logo from './shopping-cart.svg';
import './CartWidget.css'

export const CartWidget = () =>{
  return(  
     <img src={logo} alt="Logo" className="carrito" style={{maxHeight: '30px'}}/>   
  );
}
