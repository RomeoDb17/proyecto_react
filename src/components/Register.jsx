import React, { useState } from 'react';
import './Register.css'; // Importar el archivo CSS de Register
import Navbar from './Navbar'; // Importar el componente Navbar
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const Navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
  
    // Validar que los campos no estén vacíos
    if (!username || !password || !email) {
      setError('Todos los campos son obligatorios');
      return;
    }

    try {
      const response = await fetch('http://localhost:3001/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, email, password }),
      });
  
      if (response.ok) {
        console.log('User registered successfully');
        // Redireccionar a la página de inicio después del registro exitoso
        Navigate('/login')
      } else {
        console.error('Registration failed');
      }
    } catch (error) {
      console.error('Error during registration:', error);
    }
  };

  return (
    <div>
      <Navbar /> {/* Aquí se incluye el componente de barra de navegación */}
      <form onSubmit={handleSubmit}>
        {error && <p className="error">{error}</p>} {/* Mostrar mensaje de error si existe */}
        <label>
          Username:
          <input type="text" value={username} onChange={e => setUsername(e.target.value)} required />
        </label>
        <label>
          Email:
          <input type="email" value={email} onChange={e => setEmail(e.target.value)} required />
        </label>
        <label>
          Password:
          <input type="password" value={password} onChange={e => setPassword(e.target.value)} required />
        </label>
        <input type="submit" value="Register" />
      </form>
    </div>
  );
};

export default Register;
