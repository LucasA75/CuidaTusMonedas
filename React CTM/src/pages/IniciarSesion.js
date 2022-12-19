import React from "react";
import {Login,FondoVideo, FondoLogin } from "../components";
import "../components/Login/Login.css"
/* import FondoVideo from "../components"; */

const IniciarSesion = () =>{
    return(
        <main>
       <FondoVideo/>
        <FondoLogin/>
        <Login/>
        </main>

    )
}

export default IniciarSesion;