import { CartContext } from "./CartContext";
import { useState } from "react";

export const CartProvider = ({children}) => {
    
    const [cart, setCart] = useState([]);

    const exists = (id) => {
        const exist = cart.some(item => item.id === id);
        return exist;
    }

    const addItem = (item) => {
        if (exists(item.id)) {
            alert("El ítem ya existe en el carrito");
            return;
        }
        setCart([...cart, item]);
        alert(`${item.name} agregado al carrito`);
    }
    
    const clearCart = () => {
        setCart([]);
    }

    const getTotalItems = () => {
        return cart.length;
    }

    const values = {cart, addItem, clearCart, getTotalItems};

    return (
        <CartContext.Provider value={values}>
            {children}
        </CartContext.Provider>
    );
}