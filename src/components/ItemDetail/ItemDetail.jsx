import { Item } from "../Item/Item"
import { useCartContext } from "../../context/CartContext/UseCartContext";
import { Count } from "../Count/Count";

export const ItemDetail = ({ detail }) => {
    const { addItem } = useCartContext();
    
    const handleAdd = (quantity) => {
        addItem({...detail, quantity});
    }
    
    return(
        <Item {...detail}>
            <Count btnText="Agregar al carrrito" onConfirm={handleAdd} />
        </Item>
    );
};