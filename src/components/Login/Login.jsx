import { useState } from "react";
import { useAuthContext } from "../../context/AuthContext/useAuthContext";
import { Navigate ,useNavigate } from "react-router-dom";

export const Login = () => {
    const [userForm, setUserForm] = useState({ normalizePath: '', password: '' });
    const { user, login } = useAuthContext();
    const navigate = useNavigate();

    if (user) {
        return <Navigate to="/admin/alta-producto" />;
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserForm({ ...userForm, [name]: value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const success = login(userForm.name, userForm.password);
        if (success) {
            navigate("/admin/alta-producto");
        } else {
            alert("Credenciales incorrectas");
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <h2>Iniciar sesion</h2>
            <div>
                <label>Usuario:</label>
                <input
                    type="text"
                    name="name"
                    value={userForm.name}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label>Contraseña:</label>
                <input
                    type="password"
                    name="password"
                    value={userForm.password}
                    onChange={handleChange}
                />
            </div>
            <button type="submit">Ingresar</button>
        </form>
    )
};
