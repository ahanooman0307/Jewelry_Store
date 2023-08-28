import React from "react";
import '../styles/Home.css'
import Navbar from "./HomeNavbar";

const HomeImage = () =>{
    return (
        <>
        <div className="imageContainer">
        <Navbar></Navbar>
        {/* <img src={require('..//images/clothesimg.jpg')} className="homeimage" /> */}
        </div>
        </>
        )
}

export default HomeImage;