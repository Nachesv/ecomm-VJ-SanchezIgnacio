import React from 'react'
import '../../App.css';
import { CartWidget } from './CartWidget';


export const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <h1>Hermes Gaming Journal</h1>
                    
            <div  className="navbar-nav">
                <a className="nav-item nav-link active" href="#navbar-nav">
                    Home
                </a>
                <a className="nav-item nav-link" href="#navbar-nav">
                    PC
                </a>
                <a className="nav-item nav-link" href="#navbar-nav">
                    Consolas
                </a>
                <a className="nav-item nav-link" href="#navbar-nav">
                    Tienda
                </a>
                <a className="nav-item nav-link" href="#navbar-nav">
                    Nosotros
                </a>
            </div>

             <CartWidget /> 
        </nav>
    )
}
