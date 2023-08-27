import React from "react";
import {Link} from 'react-router-dom'
import '../styles/Navbar.css'


const Navbar = () =>{
    return(
        <div className="navbar">
            <div className="left">Akshay's Jewelry</div>
            <div className="left">
                <a href="">Shop</a>
                <Link to='/search'>Search</Link>
                <a href="">Cart</a>
            </div>
        </div>
    )
}

export default Navbar;