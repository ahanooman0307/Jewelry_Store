import React from "react";
import Navbar from "./HomeNavbar";
import HomeImage from "./HomeImage";
import FeaturedItems from "./FeaturedItems";

const Home = () =>{
return(
    <div>
        <Navbar></Navbar>
        <HomeImage></HomeImage>
        <FeaturedItems></FeaturedItems>
    </div>

)
}

export default Home;