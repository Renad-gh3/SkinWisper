import React, { createContext, useState, useEffect} from "react";
import axios from "axios";
//import {List} from '../../assets/assets';


// Create the context
export const StoreContext = createContext(null);

// Context provider component
const StoreContextProvider = (props) => {
    // State for the cart items
    const [cartItems, setCartItems] = useState({});
    const url = "http://localhost:5000";
    const[token, setToken] = useState("");
    const [List , setList] = useState([]);

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
    const getTotalCartAmount=()=>{
        let totalAmount=0;
        for(const item in cartItems){
            if(cartItems[item]>0){
              let itemInfo =List.find((product)=>product.id===item);
              totalAmount+=itemInfo.price*cartItems[item];
            }
            

        }
        return totalAmount;
    }


    const fetchProductList = async () =>{
        const response = await axios.get(url+"/api/Products/list");
        setList(response.data.data);
    }

    useEffect(()=>{
        async function loadData(){
            await fetchProductList()
            if(localStorage.getItem("token")){
                setToken(localStorage.getItem("token"));
            }
        }
        loadData();
    },[])


    // Context value containing the product list, cart items, and cart functions
    const contextValue = {
        List,
        cartItems,
        addToCart,
        RemoveFromCart,
        getTotalCartAmount,
        url
    };

    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    );
};

export default StoreContextProvider;