import { Link } from "react-router-dom";
import { useCartContext } from "../../context/CartContext/UseCartContext";
import { Item } from "../Item/Item";
import "./Cart.css";

export const Cart = ({ children }) => {

    const {cart, clearCart, deleteItem, calculateTotalPrice, checkout} = useCartContext();

    return (
        <section className="item-list-container">
            <h2>Carrito de Compras</h2>
            { cart.length? cart.map((prod) =>
                    <Item key={prod.id} {...prod}>
                        <span> Cantidad:{prod.quantity}</span>
                        <button className="btn" onClick={()=> deleteItem (prod.id)}>Eliminar</button>
                    </Item>
            ): (
                <p> Carrito vacio</p>
            )
            } 

            { cart.length ? (<div className="btn-container">
                <div className="total-price">
                    <p>Total a pagar: ${calculateTotalPrice()} </p>
                </div>
                <button className="btn" onClick={clearCart}>Vaciar Carrito</button>
                <button className="btn" onClick={checkout}>Finalizar Compra</button>
                </div>)
                : 
                (<Link to ="/"> <button className="btn">Volver al Inicio</button> </Link>)
            }
        </section>
    )
}