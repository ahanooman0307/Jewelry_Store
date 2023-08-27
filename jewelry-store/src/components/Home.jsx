import React from "react";
import Navbar from "./HomeNavbar";
import HomeImage from "./HomeImage";
import FeaturedItems from "./FeaturedItems";
import { Route, Routes } from "react-router-dom";

const Home = () =>{
return(
   <>
        <Navbar></Navbar>
        <HomeImage></HomeImage>
        </>

)
}

export default Home;