import { useState } from "react"

export const Form = () => {

    const [user, setUser] = useState({
        nombre: "",
        email: "",
        contrasenia: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser({
            ...user,
            [name]: value
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Usuario ${user.nombre} registrado con el email ${user.email}`);
        setUser({
            nombre: "",
            email: "",
            contrasenia: ""
        });
    }

    return (<form onSubmit={handleSubmit}>
        <h2>Formulario de registro</h2>

        <input type="text" placeholder="Name" 
        name="nombre" value={user.nombre} onChange={handleChange} />

        <input type="email" placeholder="Email" 
        name="email" value={user.email} onChange={handleChange}/>
        <input type="password" placeholder= "Pass"
         name="contrasenia" value={user.contrasenia} 
         onChange={handleChange}/>

        <button type="submit">Enviar</button>
    </form>
    );
};