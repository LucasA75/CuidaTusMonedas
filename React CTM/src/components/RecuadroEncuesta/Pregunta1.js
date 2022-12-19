import React, { useCallback } from "react";
import { useNavigate } from "react-router-dom";

import "./Recuadro.css";
import BotonSiguiente from "./BotonEncuesta";

const Pregunta1 = () => {
    const navigate = useNavigate();    
      const handleOnClick = useCallback(
      () => navigate ("/Encuesta2", {}, [navigate]))

    return (

        <div class="container-lg encuesta">
            <br></br>
            <br></br>
            <br></br> 
                <h3 class="pregunta"> ¿Cómo te llamas? </h3>
                <br></br>
                <br></br>
            <form>
                <label >
                    <input type="" class="form-control pregunta1" id="nombreEnc" placeholder="Ingresa tu nombre" /></label>
            </form>
            <br></br>
            <BotonSiguiente infoBoton={"Siguiente"} handleOnClick = {handleOnClick}></BotonSiguiente>
        </div>

    )
}

export default Pregunta1