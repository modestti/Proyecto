import { Link } from "react-router-dom";
import { useCartContext } from "../../context/CartContext/UseCartContext";
import "./Nav.css";


export const Nav = () => {

  const {getTotalItems} = useCartContext();

  return (
    <nav>
      <li>
        <Link className="nav-link" to="/">Home</Link>
      </li>
      <li>
        <Link className="nav-link" to={"/category/salado"}>Salado</Link>
      </li>
      <li>
        <Link className="nav-link" to={"/category/dulce"} >Dulce</Link>
      </li>
      <li>
        <Link className="nav-link" to={"/shopping-card"} >Carrito</Link>
        {getTotalItems() > 0 && <span className="in-cart">{getTotalItems()}</span>}
      </li>
    </nav>
  );

};