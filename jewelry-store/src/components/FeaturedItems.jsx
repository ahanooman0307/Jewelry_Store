import React, {useState, useEffect} from "react";
import '../styles/FeaturedItems.css'

const FeaturedItems = () =>{

    const [fake, setFake] = useState([]);
    console.log(fake);
    useEffect(()=>{
        fakestore();
    }, [])
    const fakestore = async() =>{
        const response = await fetch("https://fakestoreapi.com/products")
        console.log(response)
        const jsonData = await response.json();
        console.log(jsonData)
        setFake(jsonData)
    }

    // fakestore();
    return(
        <div className="featured">
            {fake.map((values)=>{
                return(
                    <>
                    <div className="items">
                <img src={values.image} alt="chain" className="item" />
                <div className="description">
                    <div className="name">{values.title}</div>
                    <div className="price">${values.price}</div>
                </div>
            </div>
                    </>
                )
            })}
            
        </div>
    )
}

export default FeaturedItems;