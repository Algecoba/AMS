import React from "react";
import { Link } from "react-router-dom";

const Home: React.FC = () => (
    <div>
        <h2>Página principal</h2>
        <p>Bienvenido al sistema de gestión escolar.</p>
        <Link to="/register">Registrar usuario</Link>
        <div id="espacio"></div>
        <Link to="/login">Iniciar sesión</Link>
    </div>
);

export default Home;