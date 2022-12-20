import React, {useCallback} from "react";
import {Login,FondoVideo, FondoLogin, BotonRegistrarse} from "../components";
import "../components/Login/Login.css"
import { useNavigate } from "react-router-dom";

const IniciarSesion = () =>{
    const navigate = useNavigate();
    const handleOnClick = useCallback(() => navigate("/Registrarse", {}, [navigate]));
    return(
        <main>
       <FondoLogin/>
        <Login/>
        </main>

    )
}

export default IniciarSesion;