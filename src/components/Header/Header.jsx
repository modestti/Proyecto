import { Nav } from "../Nav/Nav"
import "./Header.css"

export const Header = () => {
    return (
    <header className="header">
        <img className="logo" src="images/logo-panaderia.jpg" alt="Logo de la panaderia Delicias de Leo" />
        <h2>Delicias de Leo</h2>
        <Nav />
    </header>
    );
};