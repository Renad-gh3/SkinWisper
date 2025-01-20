import React, { useContext } from "react";
import "./Cart.css";
import { StoreContext } from "./StoreContext";

import emptyCart from "../../assets/empty.png";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const Cart = () => {
  const { cartItems, List, RemoveFromCart, getTotalCartAmount } =
    useContext(StoreContext);
  const hasItemsInCart = List && List.some((item) => cartItems[item.id] > 0);
  const navigate = useNavigate();
  console.log("List:", List);
  console.log("Cart Items:", cartItems);
  return (
    <div className="cart">
      {/* Cart Header */}

      <div className="cart-item-title">
        <div className="cart-header">Items</div>
        <div className="cart-header">Title</div>
        <div className="cart-header">Price</div>
        <div className="cart-header">Quantity</div>
        <div className="cart-header">Total</div>
        <div className="cart-header">Remove</div>
      </div>

      {/* Cart Items */}

      {hasItemsInCart ? (
        List.filter((item) => cartItems[item.id] > 0).map((item) => (
          <div key={item.id} className="cart-items-item">
            <div className="cart-item-detail">
              <img
                src={"http://localhost:5000/images/" + item.image}
                alt={item.name}
              />
            </div>
            <div className="cart-item-detail">
              <p>{item.name}</p>
            </div>
            <div className="cart-item-detail">
              <p>${item.price}</p>
            </div>
            <div className="cart-item-detail">
              <p>{cartItems[item.id]}</p>
            </div>
            <div className="cart-item-detail">
              <p>${item.price * cartItems[item.id]}</p>
            </div>
            <div
              className="cart-item-detail cross"
              onClick={() => RemoveFromCart(item.id)}
            >
              X
            </div>
          </div>
        ))
      ) : (
        <div className="cart-empty">
          <img src={emptyCart} alt="Empty cart" className="empty-cart-image" />
          <p>Your shopping cart is empty</p>
          <Link to="/product" className="start-shopping-link">
            Start shopping
          </Link>
        </div>
      )}

      {/* Cart Totals */}
      <div className="cart-bottom">
        <div className="cart-totals">
          <h2>Cart Totals</h2>
          <div className="cart-total-details">
            <p>Subtotal</p>
            <p>${getTotalCartAmount()}</p>
          </div>
          <div className="cart-total-details">
            <p>Delivery Fee</p>

            <p>${getTotalCartAmount() === 0 ? 0 : 2}</p>
          </div>
          <div className="cart-total-details">
            <b>Total</b>
            <b>${getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 2}</b>
          </div>
        </div>
        <div className="cart-totals-actions">
          <button onClick={() => navigate("/order")}>
            PROCEED TO CHECKOUT
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
