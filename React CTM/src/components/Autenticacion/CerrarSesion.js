import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'

const CerrarSesion = () => {
    const {logout} =useAuth0(); 
  return (
    <button onClick={() => logout({returnTo: window.location.origin})}>Cerrar sesion</button>
  )
}

export default CerrarSesion