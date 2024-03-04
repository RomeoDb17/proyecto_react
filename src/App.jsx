import React from 'react'
import Home from './components/Home';
import { Routes, Route } from 'react-router-dom';
import AcercaDe from './components/AcercaDe';
import Register from './components/Register';
import Login from './components/Login'
import Pago from './components/Pago';
import ErrorPage from './components/ErrorPage'
import UserLog from './components/UserLog';
import HomeLog from './components/HomeLog';
import AcercaDeLog from './components/AcercaDeLog';

function App() {
  
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/acerca-de" element={<AcercaDe />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/carrito" element={<Pago />}/>
        <Route path="*" element={<ErrorPage/>}/>
        <Route path="/user-log" element={<UserLog/>}/>
        <Route path="/home-log" element={<HomeLog/>}/>
        <Route path="/acerca-de-log" element={<AcercaDeLog />} />
      </Routes>
    </>
  );
}

export default App
