import React from 'react'
import useLogout from '../hooks/useLogout';

const LogoutButton = () => {
  return (
    <button onClick={useLogout}>Cerrar sesión</button>
  )
}

export default LogoutButton