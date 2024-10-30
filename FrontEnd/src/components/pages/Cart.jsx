
/*import React, { useContext } from 'react';
import './Cart.css';
import { StoreContext } from './StoreContext';

const Cart = () => {
  const { cartItems, List, RemoveFromCart, getTotalCartAmount } = useContext(StoreContext);

  return (
    <div className='cart'>
      <div className="cart-item">
        <div className='cart-item-title'>
          <div className='cart-header'><p>Items</p></div>
          <div className='cart-header'><p>Title</p></div>
          <div className='cart-header'><p>Price</p></div>
          <div className='cart-header'><p>Quantity</p></div>
          <div className='cart-header'><p>Total</p></div>
          <div className='cart-header'><p>Remove</p></div>
        </div>
        <hr />
        {List && List.length > 0 ? (
          List.filter((item) => cartItems[item.id] > 0).map((item) => (
            <div key={item.id} className='cart-items-item'>
              <div className='cart-item-detail'>
                <img src={item.image} alt={item.name} />
              </div>
              <div className='cart-item-detail'>
                <p>{item.name}</p>
              </div>
              <div className='cart-item-detail'>
                <p>${item.price}</p>
              </div>
              <div className='cart-item-detail'>
                <p>{cartItems[item.id]}</p>
              </div>
              <div className='cart-item-detail'>
                <p>${item.price * cartItems[item.id]}</p>
              </div>
              <div className='cart-item-detail'>
                <p onClick={() => RemoveFromCart(item.id)} className='cross'>X</p>
              </div>
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

export default Cart;*/
import React, { useContext } from 'react';
import './Cart.css';
import { StoreContext } from './StoreContext';

const Cart = () => {
  const { cartItems, List, RemoveFromCart, getTotalCartAmount } = useContext(StoreContext);

  return (
    <div className='cart'>
      {/* Cart Header */}
      <div className='cart-item-title'>
        <div className='cart-header'>Items</div>
        <div className='cart-header'>Title</div>
        <div className='cart-header'>Price</div>
        <div className='cart-header'>Quantity</div>
        <div className='cart-header'>Total</div>
        <div className='cart-header'>Remove</div>
      </div>

      {/* Cart Items */}
      {List && List.length > 0 ? (
        List.filter((item) => cartItems[item.id] > 0).map((item) => (
          <div key={item.id} className='cart-items-item'>
            <div className='cart-item-detail'>
              <img src={item.image} alt={item.name} />
            </div>
            <div className='cart-item-detail'>
              <p>{item.name}</p>
            </div>
            <div className='cart-item-detail'>
              <p>${item.price}</p>
            </div>
            <div className='cart-item-detail'>
              <p>{cartItems[item.id]}</p>
            </div>
            <div className='cart-item-detail'>
              <p>${item.price * cartItems[item.id]}</p>
            </div>
            <div className='cart-item-detail cross' onClick={() => RemoveFromCart(item.id)}>
              X
            </div>
          </div>
        ))
      ) : (
        <p>Your cart is empty</p>
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
            <p>$2</p>
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






