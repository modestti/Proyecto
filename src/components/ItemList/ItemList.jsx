import { Link } from "react-router-dom";
import { Item } from "../Item/Item";

export const ItemList = ({ lista }) => {
    return (
        <div className="item-list">
            {lista.length ? (
                lista.map((prod) => (
                    <Link key={prod.id} to={`/detail/${prod.id}`}>
                        <Item {...prod} />
                    </Link>
                ))
            )
                :
                (<p>No hay productos</p>)}
        </div>
    );
}
