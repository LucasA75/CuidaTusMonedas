import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'

const CerrarSesion = () => {


    const {logout} =useAuth0(); 
  return (
    <button
    style={{
          backgroundColor:' rgb(255, 202, 67)',
          borderRadius: "25px",
          fontSize: "20px",
          paddingTop: "10px",
          paddingBottom:"10px",
          paddingLeft: "30px",
          paddingRight:"30px"
     
     }}  
     onClick={() => logout({returnTo: window.location.origin})}>
     Cerrar sesion
     </button>
  )
}

export default CerrarSesion