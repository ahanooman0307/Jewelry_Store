import React from "react";
import {Link} from 'react-router-dom'
import '../styles/Navbar.css'


const Navbar = () =>{
    return(
        <div className="navbar">
            <div className="left">
                <Link to='/'>Akshay's Jewelry</Link>
                </div>
            <div className="left">
                <Link to='/shop'>Shop</Link>
                <Link to='/search'>Search</Link>
                <a href="">Cart</a>
            </div>
        </div>
    )
}

export default Navbar;