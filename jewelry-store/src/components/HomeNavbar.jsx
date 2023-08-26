import React from "react";
import '../styles/Navbar.css'

const Navbar = () =>{
    return(
        <div className="navbar">
            <div className="left">Akshay's Jewelry</div>
            <div className="left">
                <a href="">Shop</a>
                <a href="">Search</a>
                <a href="">Cart</a>
            </div>
        </div>
    )
}

export default Navbar;