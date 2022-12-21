import React from "react";
import {Login,FondoVideo, FondoLogin, BotonRegistrarse, ConfirmacionExitosa} from "../components";
import { RectanguloRegistro } from "../components/FondoLogin/FondoLogin";
import "../components/Login/Login.css"

const ConfirmacionRegistro = () =>{
    return(
        <main>
       <FondoLogin/>
       <ConfirmacionExitosa/>
       
        </main>

    )
}

export default ConfirmacionRegistro;