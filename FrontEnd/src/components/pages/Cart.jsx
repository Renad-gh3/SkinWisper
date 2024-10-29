/*import React, { useContext } from 'react';
import './Cart.css';
import { StoreContext } from './StoreContext';

const Cart = () => {
  const { cartItems, List, RemoveFromCart } = useContext(StoreContext);

  return (
    <div className='cart'>
      <div className="cart-item">
        <div className='cart-item-title'>
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {List && List.length > 0 ? (
          List.filter((item) => cartItems[item.id] > 0).map((item) => (
            <div key={item.id}>
              <div className='cart-items-item'>
                <img src={item.image} alt={item.name} />
                <p>{item.name}</p>
                <p>${item.price}</p>
                <p>{cartItems[item.id]}</p>
                <p>${item.price * cartItems[item.id]}</p>
                <p onClick={() => RemoveFromCart(item.id)} className='cross'>X</p>
              </div>
              <hr />
            </div>
          ))
        ) : (
          <p>Your cart is empty</p>
        )}
      </div>
      <div className="cart-bottom">
    <div className="cart-totals">
        <h2>Cart Totals</h2>
    </div>
    <div className="cart-total-details">
        <p>Subtotal</p>
        <p>{0}</p>
    </div>
    <div className="cart-total-details">
        <p>Delivery Fee</p>
        <p>{2}</p>
    </div>
    <hr />
    <div className="cart-total-details">
        <b>Total</b>
        <b>{0}</b>
    </div>
   <button>PROCEED TO CHECKOUT </button>
</div>

    </div>
  );
};

export default Cart;*/
import React, { useContext } from 'react';
import './Cart.css';
import { StoreContext } from './StoreContext';

const Cart = () => {
  const { cartItems, List, RemoveFromCart, getTotalCartAmount } = useContext(StoreContext);

  return (
    <div className='cart'>
      <div className="cart-item">
        <div className='cart-item-title'>
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <hr />
        {List && List.length > 0 ? (
          List.filter((item) => cartItems[item.id] > 0).map((item) => (
            <div key={item.id} className='cart-items-item'>
              <img src={item.image} alt={item.name} />
              <p>{item.name}</p>
              <p>${item.price}</p>
              <p>{cartItems[item.id]}</p>
              <p>${item.price * cartItems[item.id]}</p>
              <p onClick={() => RemoveFromCart(item.id)} className='cross'>X</p>
            </div>
          ))
        ) : (
          <p>Your cart is empty</p>
        )}
      </div>
      <div className="cart-bottom">
        <div className="cart-totals">
          <h2>Cart Totals</h2>
          <div className="cart-total-details">
            <p>Subtotal</p>
            <p>${getTotalCartAmount()}</p>
          </div>
          <div className="cart-total-details">
            <p>Delivery Fee</p>
            <p>${2}</p>
          </div>
          <div className="cart-total-details">
            <b>Total</b>
            <b>${getTotalCartAmount() + 2}</b>
          </div>
        </div>
        <div className="cart-totals-actions">
          <button>PROCEED TO CHECKOUT</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;

