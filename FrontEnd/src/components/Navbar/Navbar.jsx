import React from 'react'
import './Navbar.css'
import { assets } from "../../assets/assets";
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className= 'navbar'>
      <img src={assets.logo} alt="" className="logo" />
      <ul className="navbar-menu">
        <li>
          <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")}>Home</NavLink>
        </li>
        <li>
          <NavLink to="/menu" className={({ isActive }) => (isActive ? "active" : "")}>Our Shop</NavLink>
        </li>
        <li>
          <NavLink to="/skin-test" className={({ isActive }) => (isActive ? "active" : "")}>Skin tests</NavLink>
        </li>
        <li>
          <NavLink to="/contact-us" className={({ isActive }) => (isActive ? "active" : "")}>Contact-us</NavLink>
        </li>
      </ul>
      <div className="navbar-right">
        <img src={assets.search_icon} alt="" />
        <div className = "navbar-search-icon">
          <img src = {assets.cart_icon} alt=''/>
          <div className= "dot"></div>
        </div>
        <button>Sign-in</button>
      </div>
    </div>
  )
}

export default Navbar;
