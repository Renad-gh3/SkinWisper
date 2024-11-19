import React, { useContext, useState } from "react";
import "./PlaceOrder.css";
import { StoreContext } from "./StoreContext";
import { useNavigate } from "react-router-dom";

const PlaceOrder = () => {
  const { getTotalCartAmount, List, cartItems, resetCart } = useContext(StoreContext);
  const navigate = useNavigate();

  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    street: "",
    city: "",
    state: "",
    zipcode: "",
    country: "",
    phone: "",
  });

  const [showPopup, setShowPopup] = useState(false);

  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setData((prevData) => ({ ...prevData, [name]: value }));
  };

  const placeOrder = async (event) => {
    event.preventDefault();

    // Prepare the order items from the cart
    const orderItems = List.filter((item) => cartItems[item._id] > 0).map(
      (item) => ({
        id: item._id,
        name: item.name,
        price: item.price,
        quantity: cartItems[item._id],
      })
    );

    // Retrieve the user's email from the token
    const token = localStorage.getItem("token");
    if (!token) {
      alert("You must be logged in to place an order.");
      return;
    }

    let userEmail = "";
    try {
      const tokenData = JSON.parse(atob(token.split(".")[1])); // Decode JWT token
      userEmail = tokenData.email; // Assuming 'email' is part of the token payload
    } catch (error) {
      console.error("Failed to decode token:", error);
      alert("Invalid token. Please log in again.");
      return;
    }

    const orderDetails = {
      firstName: data.firstName,
      lastName: data.lastName,
      street: data.street,
      city: data.city,
      state: data.state,
      zipCode: data.zipcode,
      country: data.country,
      phone: data.phone,
      email: userEmail, // Include user's email
      items: orderItems, // Include cart items
    };

    // Log the order details before sending it to the backend
    console.log("Order Details: ", orderDetails);

    try {
      // Send the order details to the backend
      const response = await fetch("http://localhost:5000/api/order/place", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          token: token, // Include the JWT token in headers
        },
        body: JSON.stringify(orderDetails),
      });

      const result = await response.json();

      // Log the backend response to check if the order was placed successfully
      console.log("Backend Response: ", result);

      if (result.success) {
        console.log("Order placed successfully:", result.message);
        setShowPopup(true); // Show confirmation popup
      } else {
        console.error("Failed to place order:", result.message);
      }
    } catch (error) {
      console.error("Error placing order:", error);
    }
  };

  const goToHomePage = () => {
    setShowPopup(false);
    navigate("/"); // Navigate to the home page
    resetCart();
  };

  return (
    <div>
      <form onSubmit={placeOrder} className="place-order">
        <div className="place-order-left">
          <p className="title">Delivery Information</p>
          <div className="multi-fields">
            <input
              required
              name="firstName"
              onChange={onChangeHandler}
              value={data.firstName}
              type="text"
              placeholder="First Name"
            />
            <input
              required
              name="lastName"
              onChange={onChangeHandler}
              value={data.lastName}
              type="text"
              placeholder="Last Name"
            />
          </div>
          <input
            required
            name="street"
            onChange={onChangeHandler}
            value={data.street}
            type="text"
            placeholder="Street"
          />
          <div className="multi-fields">
            <input
              required
              name="city"
              onChange={onChangeHandler}
              value={data.city}
              type="text"
              placeholder="City"
            />
            <input
              required
              name="state"
              onChange={onChangeHandler}
              value={data.state}
              type="text"
              placeholder="State"
            />
          </div>
          <div className="multi-fields">
            <input
              required
              name="zipcode"
              onChange={onChangeHandler}
              value={data.zipcode}
              type="text"
              placeholder="Zip Code"
            />
            <input
              required
              name="country"
              onChange={onChangeHandler}
              value={data.country}
              type="text"
              placeholder="Country"
            />
          </div>
          <input
            required
            name="phone"
            onChange={onChangeHandler}
            value={data.phone}
            type="text"
            placeholder="Phone"
          />
        </div>
        <div className="place-order-right">
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
              <b>
                ${getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 2}
              </b>
            </div>
          </div>
          <div className="cart-totals-actions">
            <button type="submit">PROCEED TO PAYMENT</button>
          </div>
        </div>
      </form>

      {/* Popup for Thank You message */}
      {showPopup && (
        <div className="popup-overlay" onClick={goToHomePage}>
          <div className="popup-content">
            <p>YOUR ORDER HAS BEEN SHIPPED, THANK YOU FOR ORDERING!!</p>
            <button onClick={goToHomePage}>Home Page</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default PlaceOrder;
