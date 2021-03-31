import React from 'react'
import '../../App.css';
import { CartWidget } from './CartWidget';
import './NavBar.css';
import { NavLink, Link } from "react-router-dom";


export const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light  barraNav">
            <Link exact to="/">
            <h1>Hermes Gaming Journal</h1>
            </Link>
            <div  className="navbar-nav">
                <NavLink exact to="/">
                <a className="nav-item nav-link active" href="#navbar-nav">
                    Home
                </a>
                </NavLink>
                <NavLink to={`category/PlaysTation`}>
                <a className="nav-item nav-link" href="#navbar-nav">
                    Playstation
                </a>
                </NavLink>
                <NavLink to={`category/xbox`}>
                <a className="nav-item nav-link" href="#navbar-nav">
                    Xbox
                </a>
                </NavLink>
                <NavLink to={`category/merch`}>
                <a className="nav-item nav-link" href="#navbar-nav">
                    Merch
                </a>
                </NavLink>
                {/* <a className="nav-item nav-link" href="#navbar-nav">
                    Nosotros
                </a> */}
            </div>

             <CartWidget /> 
        </nav>
    )
}
