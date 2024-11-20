import React, { createContext, useState, useEffect } from "react";
import axios from "axios";
/*import { List } from '../../assets/assets';*/

// Create the context
export const StoreContext = createContext(null);

// Context provider component
const StoreContextProvider = (props) => {
    // State for the cart items
    const [cartItems, setCartItems] = useState({});
    const url = "http://localhost:5000";
    const[token, setToken] = useState("");
    const [List , setList] = useState([]);
    const resetCart = () => setCartItems({})

    // Function to add an item to the cart
    
    // Function to add an item to the cart
    const addToCart = async (itemId) => {
        setCartItems((prevItems) => {
            const newCount = (prevItems[itemId] || 0) + 1;
            const updatedItems = { ...prevItems, [itemId]: newCount };
    
            // Send the updated count to the backend via the existing "add" route
            if (token) {
                axios.post(url + "/api/cart/add", { itemId, count: newCount }, { headers: { token } });
            }
            return updatedItems;
        });
    };

    const RemoveFromCart = async (itemId) => {
        setCartItems((prevItems) => {
            const updatedItems = { ...prevItems };
            const newCount = updatedItems[itemId] > 1 ? updatedItems[itemId] - 1 : 0;
    
            if (newCount > 0) {
                updatedItems[itemId] = newCount;
            } else {
                delete updatedItems[itemId];
            }
    
            // Send the new count to the backend via the existing "remove" route
            if (token) {
                axios.post(url + "/api/cart/remove", { itemId, count: newCount }, { headers: { token } });
            }
            return updatedItems;
        });
    };
    


    useEffect(() => {
        console.log(cartItems);
    }, [cartItems]);

    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                let itemInfo = List.find((product) => product.id.toString() === item);
                if (itemInfo) {
                    totalAmount += itemInfo.price * cartItems[item];
                }
            }
        }
        return totalAmount;
    };

    const fetchProductList = async () => {
        const response = await axios.get(url + "/api/Products/list");
        setList(response.data.data);
    };

    const loadCartData = async (token) => {
        const response = await axios.post(url + "/api/cart/get", {}, {headers: {token}});
        setCartItems(response.data.cartData); 
    }

    useEffect(() => {
        async function loadData() {
            await fetchProductList();
            const storedToken = localStorage.getItem("token");
            if (storedToken) {
                setToken(storedToken);
                await loadCartData(storedToken);
            }
        }
        loadData();
    }, []);

    useEffect(() => {
        if (localStorage.getItem("token")) {
            setToken(localStorage.getItem("token"));
        }
    }, []);

    const contextValue = {
        List,
        cartItems,
        setCartItems,
        addToCart,
        RemoveFromCart,
        getTotalCartAmount,
        url,
        token,
        setToken,
        resetCart,
        loadCartData
    };

    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    );
};

export default StoreContextProvider;
