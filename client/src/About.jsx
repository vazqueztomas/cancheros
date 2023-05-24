import React from 'react';
import UserNavbar from './components/UserNavbar.jsx';
import EscudoAfa from './components/EscudoAfa.jsx'
const About = () => {
  return (
    <div class = 'h-screen w-screen bg-gray-800'>
    <UserNavbar/>
      <div class = 'flex flex-col text-center bg-gray-800 justify-center items-center text-white p-4 '>
        <h2 class = 'text-2xl font-bold'>Quienes somos?</h2>
        <EscudoAfa/>
        <p>Cancheros es una aplicación de autor creada por Tomás Vazquez, para satisfacer la necesidad de guardar el historial de las veces que voy a la cancha y tener la información de todos los partidos a los que concurro</p>
        <p>La idea es que todos tengan la posibilidad de llevar la cuenta e historial de todos los partidos a los que concurre, independientemente del equipo del que sean.</p>
      </div>
    </div>
  )
}

export default About;
