import { Nav } from "../Nav/Nav"
import { Link } from "react-router-dom"
import "./Header.css"

export const Header = () => {
    return (
    <header className="header">
        <img className="logo" src="images/logo-panaderia.jpg" alt="Logo de la panaderia Delicias de Leo" />
        <Link to={"/"}>Delicias de Leo</Link>
        <Nav />
    </header>
    );
};