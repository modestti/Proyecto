import { CartContext } from "./CartContext";
import { useState } from "react";

export const CartProvider = ({ children }) => {

    const [cart, setCart] = useState([]);

    const exists = (id) => {
        const exist = cart.some(item => item.id === id);
        return exist;
    }

    const addItem = (item) => {
        if (exists(item.id)) {
            const updatedCart = cart.map((prod) => {
                if (prod.id === item.id) {
                    return { ...prod, quantity: prod.quantity + item.quantity };
                }else{
                    return prod;
                }
                
            });
            setCart(updatedCart);
            alert(`Se actualizaron las unidades de ${item.name} en el carrito`);
        }else{
            setCart([...cart, item]);
            alert(`${item.name} agregado al carrito`);
        }
    };

    const clearCart = () => {
        setCart([]);
    }

    const deleteItem = (id) => {
        const updatedCart = cart.filter(item => item.id !== id);
        setCart(updatedCart);
    }

    const calculateTotalPrice = () => {
        const totalPrice = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
        return Math.round(totalPrice*100)/100;
    }

    const getTotalItems = () => {
        const total= cart.reduce((acc, item)=> acc+ item.quantity, 0);
        return total;
    }

    const checkout = () => {
        // Lógica para procesar el pago y finalizar la compra
        const ok= confirm("¿Desea finalizar la compra?");
        if(ok){
            alert("Gracias por su compra");
            clearCart();
        }
    }

    const values = { cart, addItem, clearCart, getTotalItems, deleteItem, calculateTotalPrice,checkout};

    return (
        <CartContext.Provider value={values}>
            {children}
        </CartContext.Provider>
    );
}