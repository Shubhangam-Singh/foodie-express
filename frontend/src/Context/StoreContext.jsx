import { createContext, useEffect, useState } from "react";
import { menu_list } from "../assets/assets";
import axios from "axios";

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
    const url = "http://localhost:4000"
    
    const [food_list, setFoodList] = useState([]);
    const [cartItems, setCartItems] = useState({});
    const [token, setToken] = useState("")
    const currency = "₹";
    const deliveryCharge = 50;

    const addToCart = async (itemId) => {
        if (!cartItems[itemId]) {
            setCartItems((prev) => ({ ...prev, [itemId]: 1 }));
        } else {
            setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
        }
        if (token) {
            await axios.post(url + "/api/cart/add", { itemId }, { headers: { token } });
        }
    }

    const removeFromCart = async (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }))
        if (token) {
            await axios.post(url + "/api/cart/remove", { itemId }, { headers: { token } });
        }
    }

    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                // ✅ FIX: Check if itemInfo exists before accessing properties
                let itemInfo = food_list.find((product) => product._id === item);
                if (itemInfo) {
                    totalAmount += itemInfo.price * cartItems[item];
                } else {
                    console.warn(`Item ${item} not found in food_list`);
                }
            }
        }
        return totalAmount;
    }

    const fetchFoodList = async () => {
        try {
            console.log("Fetching food from:", url + "/api/food/list");
            const response = await axios.get(url + "/api/food/list");
            console.log("Food response:", response.data);
            
            // ✅ FIX: Validate data before setting
            if (response.data.success && Array.isArray(response.data.data)) {
                setFoodList(response.data.data);
                console.log("✅ Food list loaded:", response.data.data.length, "items");
            } else {
                console.error("Invalid food data format");
                setFoodList([]);
            }
        } catch (error) {
            console.error("Error fetching food:", error);
            setFoodList([]);
        }
    }

    const loadCartData = async (userToken) => {
        try {
            // ✅ FIX: Use userToken parameter correctly
            const response = await axios.post(url + "/api/cart/get", {}, { 
                headers: { token: userToken } 
            });
            
            if (response.data.success) {
                setCartItems(response.data.cartData || {});
            } else {
                setCartItems({});
            }
        } catch (error) {
            console.error("Error loading cart:", error);
            setCartItems({});
        }
    }

    useEffect(() => {
        async function loadData() {
            await fetchFoodList();
            
            const storedToken = localStorage.getItem("token");
            if (storedToken) {
                setToken(storedToken);
                // ✅ FIX: Pass token correctly
                await loadCartData(storedToken);
            }
        }
        loadData()
    }, [])

    const contextValue = {
        url,
        food_list,
        menu_list,
        cartItems,
        addToCart,
        removeFromCart,
        getTotalCartAmount,
        token,
        setToken,
        loadCartData,
        setCartItems,
        currency,
        deliveryCharge
    };

    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}

export default StoreContextProvider;
