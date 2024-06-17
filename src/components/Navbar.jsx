import React, { useContext, useState, useEffect } from 'react'
import Home from '../assets/home.svg'
import shoppingMall from '../assets/shoppingMall.svg'
import shoppingCart from '../assets/shoppingCart.svg'
import { ShopContext } from '../context/ShopContext'
import { Link } from 'react-router-dom'

const Navbar = () => {

  const [cartItems, setCartItems] = useContext(ShopContext)

  return (
    <div>
      <div className='w-full h-24 border-2 bg-blue-300 flex justify-around items-center text-black'>
        <Link to="/" className='flex flex-row h-1/3 gap-4 hover:scale-110 transform transition duration-500 ease-in-out'>
          <img src={Home} alt="Home" />
          <h1>Home</h1>
        </Link>
        <Link to="/shop" className='flex flex-row h-1/3 gap-4 hover:scale-110 transform transition duration-500 ease-in-out'>
          <img src={shoppingMall} alt="Shopping Mall" />
          <h1>Shopping Mall</h1>
        </Link>
        <Link to="/cart" className='flex flex-row h-1/3 gap-4 hover:scale-110 transform transition duration-500 ease-in-out'>
          <img src={shoppingCart} alt="Shopping Cart" className='relative'/>
        <span className={`${cartItems.length === 0 ? "hidden" : ""} rounded-full bg-red-400 w-2 h-2 absolute translate-x-5 -translate-y-[0.2rem]`}></span>
          <h1>Shopping Cart</h1>
        </Link>
      </div>
    </div>
  )
}

export default Navbar