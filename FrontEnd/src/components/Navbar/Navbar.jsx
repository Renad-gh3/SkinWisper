import React, { useState } from "react";
import "./Navbar.css";
import { assets } from "../../assets/assets";

import { NavLink, Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { StoreContext } from "../pages/StoreContext";


const Navbar = ({ activeSection, setShowLogin }) => {
  const [menu, setMenu] = useState("menu");
  const { getTotalCartAmount, token, setToken, resetCart} = useContext(StoreContext);

  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    setToken("");
    navigate("/");
    resetCart();
  };

  const handleLoginClick = () => {
    setShowLogin((prevState) => !prevState); // Toggles login pop-up
  };
  //const [getTotalCartAmount,token,setToken] = useState(StoreContext);

  return (
    <div className="navbar">
      <Link to="/">
        <img src={assets.logo} alt="" className="logo" />
      </Link>

      <ul className="navbar-menu">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/product"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Our Shop
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/fullskintype"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Skin Type
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact-us"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Contact Us
          </NavLink>
        </li>
      </ul>
      <div className="navbar-right">
        <img src={assets.search_icon} alt="Search" />
        <div className="navbar-search-icon">
          <NavLink to="/cart">
            <img src={assets.cart_icon} alt="Cart" />
            <div className={getTotalCartAmount() === 0 ? "" : "dot"}></div>
          </NavLink>
        </div>
        {!token ? (
          <button onClick={() => setShowLogin(true)}>Sign In</button>
        ) : (
          <div className="navbar-profile">
            <img src={assets.profile_icon} alt="" />
            <ul className="nav-profile-dropdown">
              <li>
                <img src={assets.cart_icon} alt="" />
                <p>orders</p>
              </li>
              <hr />
              <li onClick={logout}>
                <img src={assets.logout_icon} alt="" />
                <p>logout</p>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
