import React, { createContext, useState } from "react";
import {List} from '../../assets/assets'; 


// Create the context
export const StoreContext = createContext(null);

// Context provider component
const StoreContextProvider = (props) => {
    // State for the cart items
    const [cartItems, setCartItems] = useState({});

    // Function to add an item to the cart
    const addToCart = (id) => {
        setCartItems((prevItems) => ({
            ...prevItems,
            [id]: (prevItems[id] || 0) + 1,
        }));
    };

    // Function to remove an item from the cart
    const RemoveFromCart = (id) => {
        setCartItems((prevItems) => {
            const updatedItems = { ...prevItems };
            if (updatedItems[id] > 1) {
                updatedItems[id] -= 1;
            } else {
                delete updatedItems[id];
            }
            return updatedItems;
        });
    };

    // Context value containing the product list, cart items, and cart functions
    const contextValue = {
        List,
        cartItems,
        addToCart,
        RemoveFromCart,
    };

    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    );
};

export default StoreContextProvider;