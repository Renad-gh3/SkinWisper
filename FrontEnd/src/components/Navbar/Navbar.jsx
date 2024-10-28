import React, { useState } from 'react'
import './Navbar.css'
import { assets } from "../../assets/assets";
import { NavLink } from 'react-router-dom';


const Navbar = ({activeSection, setShowLogin}) => {

  const [menu, setMenu] = useState("menu");
  
  //const [getTotalCartAmount,token,setToken] = useState(StoreContext);


  return (
    <div className= 'navbar'>
      <img src={assets.logo} alt="" className="logo" />
      <ul className="navbar-menu">
        <li><NavLink to= "/" className={({ isActive }) => (isActive ? "active" : "")}>Home</NavLink></li>
        <li><NavLink to="/product" className={({ isActive }) => (isActive ? "active" : "")}>Our Shop</NavLink></li>
        <li><NavLink to="/fullskintype" className={({ isActive }) => (isActive ? "active" : "")}>Skin Type</NavLink></li>
        <li><NavLink to="/contact-us" className={({ isActive }) => (isActive ? "active" : "")}>Contact Us</NavLink></li>
      </ul>
      <div className="navbar-right">
        <img src={assets.search_icon} alt="Search"/>
        <div className = "navbar-search-icon">
          <img src = {assets.cart_icon} alt="Cart" />
          <div className= "dot"></div>
        </div>
        <button onClick={() => setShowLogin(true)}>Sign In</button>
      </div>
    </div>
  )
}

export default Navbar;
