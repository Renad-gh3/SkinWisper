import React, { useContext, useState } from 'react';
import './PlaceOrder.css';
import { StoreContext } from './StoreContext';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import Product from './product';
import { List } from '../../assets/assets';

const PlaceOrder = () => {
    const { getTotalCartAmount, List, cartItems } = useContext(StoreContext);
    const navigate = useNavigate(); // Initialize useNavigate

    const [data, setData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        street: "",
        city: "",
        state: "",
        zipcode: "",
        country: "",
        phone: ""
    });

    const [showPopup, setShowPopup] = useState(false); // State to control popup visibility

    const onChangeHandler = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setData(data => ({ ...data, [name]: value }));
    };

    const placeOrder = (event) => {
        event.preventDefault();
        let orderItems = [];
        List.map((item) => {
            if (cartItems[item._id] > 0) {
                let itemInfo = item;
                itemInfo["quantity"] = cartItems[item._id];
                orderItems.push(itemInfo);
            }
        });
        
        
        setShowPopup(true);
    };

    const goToHomePage = () => {
        setShowPopup(false);
        navigate('/'); // Navigate to HomePage
    };

    return (
        <div>
            <form onSubmit={placeOrder} className='place-order'>
                <div className="place-order-left">
                    <p className="title">Delivery Information</p>
                    <div className="multi-fields">
                        <input required name='firstName' onChange={onChangeHandler} value={data.firstName} type="text" placeholder='First Name' />
                        <input required name='lastName' onChange={onChangeHandler} value={data.lastName} type="text" placeholder='Last Name' />
                    </div>
                    <input required name='email' onChange={onChangeHandler} value={data.email} type="email" placeholder='Email address' />
                    <input required name='street' onChange={onChangeHandler} value={data.street} type="text" placeholder='Street' />
                    <div className="multi-fields">
                        <input required name='city' onChange={onChangeHandler} value={data.city} type="text" placeholder='City' />
                        <input required name='state' onChange={onChangeHandler} value={data.state} type="text" placeholder='State' />
                    </div>
                    <div className="multi-fields">
                        <input required name='zipcode' onChange={onChangeHandler} value={data.zipcode} type="text" placeholder='Zip code' />
                        <input required name='country' onChange={onChangeHandler} value={data.country} type="text" placeholder='Country' />
                    </div>
                    <input required name='phone' onChange={onChangeHandler} value={data.phone} type="text" placeholder='Phone' />
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
                            <b>${getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 2}</b>
                        </div>
                    </div>
                    <div className="cart-totals-actions">
                        <button type='submit'>PROCEED TO PAYMENT</button>
                    </div>
                </div>
            </form>

            {/* Popup for Thank you message */}
            {showPopup && (
                <div className="popup-overlay" onClick={goToHomePage}>
                    <div className="popup-content">
                        <p>YOUR ORDER HAS BEEN SHIPPED, THANK YOU FOR ORDRING!!</p>
                        <button onClick={goToHomePage}> Home Page</button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default PlaceOrder;