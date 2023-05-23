import React from 'react';
import UserNavbar from './components/UserNavbar.jsx';
import EscudoAfa from './components/EscudoAfa.jsx'
const Contact = () => {
  return(
    <div class = "h-screen w-screen text-center bg-gray-700">
      <UserNavbar/>
      <div class = 'p-4 flex flex-col justify-center items-center'>
        <h2 class = "text-white text-2xl">Cancheros Team</h2>
        <EscudoAfa/>
        <p class = 'text-white text-sm'>
        El equipo de cancheros realiza páginas web a medida, con manejo de base de datos en cualquier parte del mundo y con una velocidad impecable, utilizando las mejores tecnologías del mercado y creando páginas web limpias, seguras y escalables.</p>
      </div>
    </div>
  )
}

export default Contact;
