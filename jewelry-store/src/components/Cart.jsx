import React, {useState, useEffect} from 'react'
import Navbar from './HomeNavbar'



const Cart = ({ cart, handleAddToCart }) => {
    return (
        <>
        <Navbar></Navbar>
      <div className="cart">
        <h2>Your Cart</h2>
        <ul>
          {cart.map((cartItem) => (
            <li key={cartItem.id}>
              {cartItem.title}
              <button onClick={() => handleAddToCart(cartItem.id)}>Add to Cart</button>
            </li>
          ))}
        </ul>
      </div>
      </>
    );
  };

export default Cart;