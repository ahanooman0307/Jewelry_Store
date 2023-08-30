import React, { useState, useEffect } from "react";
import HomeImage from "./HomeImage";
import '../styles/FeaturedItems.css'
import axios from "axios";

const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products/")
      .then((response) => {
        console.log(response);
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  // Define the indices of the items you want to display
  const itemIndices = [2, 3, 18, 14];

  const handleItemClick = (itemId) => {
    console.log("Clicked on item ID:", itemId);
  };


  return (
    <>
      <HomeImage />
      <div className="featured">
        <div className="featureditems">Featured Items</div>
        <div className="items">
          {itemIndices.map((index) => {
            const item = data[index];
            if (item) {
              return (
                <div key={index} className="itemfeatured">
                  <img src={item.image} alt={item.title} className="item-image" />
                  <div className="description">
                    <div className="name">{item.title}</div>
                    <div className="price">${item.price}</div>
                    <button onClick={() => handleItemClick(item.id)}>Add to cart</button>
                  </div>
                </div>
              );
            } else {
              return null; // Handle the case where the item doesn't exist
            }
          })}
        </div>
      </div>
    </>
  );
};

export default Home;






