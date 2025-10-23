import { Item } from "../Item/Item"
import { useCartContext } from "../../context/CartContext/UseCartContext";

export const ItemDetail = ({ detail }) => {
    const { addItem } = useCartContext();
    return(
        <Item {...detail}>
            <button onClick={()=> addItem(detail)}>Agregar al carrito</button>
        </Item>
    );
};