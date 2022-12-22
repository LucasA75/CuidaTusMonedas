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
        <button onClick={() => loginWithRedirect()}>Login</button>
    )
}

export {Autenticacion, LoginBoton};