import './product.css';
import addIcon from '../../assets/add.jpg';
import removeIcon from '../../assets/remove.jpg';
import add_green from '../../assets/add-green.jpg';
import rating_start from '../../assets/rating_start.jpg';
import React, { useContext } from 'react';
import { StoreContext } from './StoreContext';

const Product = ({ id, name, price, description, image }) => {
    const { cartItems, addToCart, RemoveFromCart, url} = useContext(StoreContext);
   //<img className='product-item-image' src={"http://localhost:5000/images/"+image} alt={name} />  url+"/images/"+
    return (
        <div className='product-item'>
            <div className="product-item-img-container">
                <img className='product-item-image' src={"http://localhost:5000/images/"+image} alt={name} />
                {!cartItems[id] ? (
                    <img
                        className='add'
                        onClick={() => addToCart(id)} 
                        src={addIcon}
                        alt="Add to cart"
                    />
                ) : (
                    <div className='item-counter'>
                        <img
                            onClick={() => RemoveFromCart(id)} 
                            src={removeIcon}
                            alt="Remove from cart"
                        />
                        <p>{cartItems[id]}</p>
                        <img
                            onClick={() => addToCart(id)} 
                            src={add_green} 
                            alt="Add more" 
                        />
                    </div>
                )}
            </div>
            <div className="product-item-info">
                <div className='product-item-name-rating'>
                    <p>{name}</p>
                    <img src={rating_start} alt="Rating" />
                </div>
                <p className='product-item-description'>{description}</p>
                <p className='product-item-price'>${price}</p>
            </div>
        </div>
    );
};

export default Product;
