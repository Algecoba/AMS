import React from "react";

const Login: React.FC = () => (
    <div>
        <h2>Iniciar sesión</h2>
        <form>
            <input type="text" placeholder="Usuario" /><br />
            <input type="password" placeholder="Contraseña" /><br />
            <button type="submit">Entrar</button>
        </form>
    </div>
);

export default Login;