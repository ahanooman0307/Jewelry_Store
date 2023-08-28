import React from "react";
import '../styles/Home.css'
import Navbar from "./HomeNavbar";
import {Link} from 'react-router-dom'


const HomeImage = () =>{
    return (
        <>
        <div className="imageContainer">
        <Navbar></Navbar>
        <div className="statementcontainer">
            <div className="statement">Just Dress Better</div>
          <div> <Link to='/shop' className="shopbutton">Shop Now</Link></div> 
        </div>
        </div>
        </>
        )
}

export default HomeImage;