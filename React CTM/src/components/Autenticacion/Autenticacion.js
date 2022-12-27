import React from 'react'
import { useAuth0 } from '@auth0/auth0-react';


const Autenticacion = () => {
  return (
    <div>Autenticacion</div>
  )
}

const LoginBoton = () =>{

    const {loginWithRedirect} = useAuth0();

    return(
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
         onClick={() => loginWithRedirect()}>
         Iniciar Sesion
         </button>
    )
}

export {Autenticacion, LoginBoton};