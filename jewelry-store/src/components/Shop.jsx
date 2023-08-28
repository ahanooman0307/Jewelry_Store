import React, {useState, useEffect} from "react";
import Navbar from "./HomeNavbar";
import axios from "axios"
import '../styles/Store.css'

const Shop = () =>{
    const [search, setSearch] = useState("")
    const [data, setData] = useState([])

    useEffect(()=>{
        axios.get("https://fakestoreapi.com/products")
        .then((response)=>{
            console.log(response)
            setData(response.data)
        })
        .catch((error)=>{
            console.log(error)
        })
    }, [])
    return(
        <>
        <Navbar></Navbar>
        <div className="container">
        <h1>Search Box</h1>
        <input type="search" name="src" id="search_products" value ={search} onChange = {(e)=>{setSearch(e.target.value)}} />
        </div>
       {
        data
            .filter((row)=>{
                if(search==""){
                    return row;
                }
                else if (row.title.toLowerCase().includes(search.toLowerCase())){ 
                    return row;
                }
            })

            .map((row, index)=>{
                return(
                    <div className="card" key = {index}>
                        <div className="image">
                            <img src={row.image} alt={row.image} />
                        </div>
                        <div className="title">
                            <h2>{row.title.substring(0, 20)}</h2>
                            <p>${row.price}</p>
                        </div>
                    </div>
                )
            })
    

       }
        
        
        </>
    )
}

export default Shop;