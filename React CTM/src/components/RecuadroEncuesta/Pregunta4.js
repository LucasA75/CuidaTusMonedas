import React, { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import BotonSiguiente from './BotonEncuesta';


export const Pregunta4 = () => {

    const navigate = useNavigate();    
    const handleOnClick = useCallback(
    () => navigate ("/", {}, [navigate]))

    return (
        <div class="container-lg encuesta">
            <br></br>
            <br></br>
            <br></br>
            <center><h3>
                Te llegará un mail para que termines
                de llenar tu información para así
                disfrutar de una experiencia personalizada.
            </h3></center>
            <br></br>
            <BotonSiguiente infoBoton={"Finalizar"} handleOnClick = {handleOnClick}></BotonSiguiente>
        </div>
    )
}

export default Pregunta4;