import React, { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import BotonSiguiente from './BotonEncuesta';
import BotonAtras from "./BotonAtras";


export const Pregunta4 = () => {

    const navigate = useNavigate();    
    const handleOnClick = useCallback(
    () => navigate ("/", {}, [navigate]))

    const navigate2 = useNavigate();
    const handleOnClick2 = useCallback(
        () => navigate2("/Encuesta3", {}, [navigate2]))

    return (
        <div class="container-lg encuesta">
            <br></br>
            <br></br>
            <br></br>
            <center><h3 class="pregunta">
                Te llegará un mail para que termines
                de llenar tu información para así
                disfrutar de una experiencia personalizada.
            </h3></center>
            <br></br>
            <br></br>
            <br></br>
            <BotonAtras infoBoton2={"Atrás"} handleOnClick2={handleOnClick2}></BotonAtras>
            <BotonSiguiente infoBoton={"Finalizar"} handleOnClick = {handleOnClick}></BotonSiguiente>
        </div>
    )
}

export default Pregunta4;