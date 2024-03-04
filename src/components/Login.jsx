// Importaciones de módulos necesarios
import React, { useState } from "react";
import axios from "axios"; // Importa Axios para realizar peticiones HTTP
import { useNavigate } from "react-router-dom"; // Importa el hook useNavigate para la navegación programática
import Navbar from "./Navbar"; // Importa el componente Navbar

// Definición del componente funcional Login
const Login = () => {
  // Inicialización de variables de estado
  const navigate = useNavigate(); // Uso del hook useNavigate para la navegación
  const [username, setUsername] = useState(""); // Estado para el nombre de usuario
  const [password, setPassword] = useState(""); // Estado para la contraseña

  // Función para manejar el evento de inicio de sesión
  const handleLogin = async () => {
    try {
      // Realiza una petición GET para verificar las credenciales del usuario
      const response = await axios.get(`http://localhost:3001/users?username=${username}&password=${password}`);
      const user = response.data[0]; // Obtiene el primer usuario que coincida con las credenciales
      if (user) {
        // Si se encuentra un usuario, el inicio de sesión es exitoso
        console.log("Login successful", user);
        navigate('/user-log'); // Redirige al usuario a la página /user-log
      } else {
        // Si no se encuentra un usuario, las credenciales son inválidas
        alert("Invalid credentials");
      }
    } catch (error) {
      // Manejo de errores en caso de fallo en la petición
      console.error("Error logging in:", error);
      alert("Error logging in. Please try again.");
    }
  };

  // Renderizado del componente
  return (
    <div>
      <Navbar /> {/* Incluye el componente de barra de navegación */}
      <h2>Login</h2> {/* Título del formulario de inicio de sesión */}
      <label>
        Username: {/* Etiqueta y campo de entrada para el nombre de usuario */}
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
      </label>
      <br />
      <label>
        Password: {/* Etiqueta y campo de entrada para la contraseña */}
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </label>
      <br />
      <button onClick={handleLogin}>Login</button> {/* Botón para iniciar sesión */}
    </div>
  );
};

export default Login; // Exporta el componente Login
