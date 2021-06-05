import React from 'react'
import '../../App.css';
import { CartWidget } from './CartWidget';
import './NavBar.css';
import { NavLink, Link } from "react-router-dom";


export const NavBar = () => {
    return (
        <div>
        <nav className="navbar navbar-expand-lg navbar-light  barraNav">
            <Link exact to="/">
                <h1>Hermes Gaming Journal</h1>
            </Link>
            <div  className="navbar-nav">
                <NavLink exact to="/">
                
                    Home
                
                </NavLink>
                <NavLink to={`/category/PlayStation`}>
                
                    Playstation
                
                </NavLink>
                <NavLink to={`/category/xbox`}>
                
                    Xbox
                
                </NavLink>
                <NavLink to={`/category/merch`}>
                
                    Merch
                
                </NavLink>
                {/* <a className="nav-item nav-link" href="#navbar-nav">
                    Nosotros
                </a> */}
                <NavLink to="/cart" className="header__cart">
                    <   CartWidget />
                </NavLink>
            </div>

             
        </nav>

        {/* <Link to="/cart" className="header__cart">
        <   CartWidget />
        </Link> */}
        </div>
    )
}
