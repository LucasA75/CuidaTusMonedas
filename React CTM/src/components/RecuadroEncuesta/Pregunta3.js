import React, { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import BotonSiguiente from './BotonEncuesta';


export const Pregunta3 = () => {

    const navigate = useNavigate();    
    const handleOnClick = useCallback(
    () => navigate ("/Encuesta4", {}, [navigate]))
    
    return (
        <div class="container-lg encuesta">
            <br></br>
            <br></br>
            <br></br>
            <h3>Déjanos tu correo electrónico para comenzar a crear tu cuenta y disfrutar de nuestro Newsletter</h3>
            <br></br>
            <br></br>
            <form>
                <label>
                    <input type="" class="form-control pregunta1" id="correoEnc" placeholder="Tu correo"/></label>
            </form>
            <br></br>
            <BotonSiguiente infoBoton={"Siguiente"} handleOnClick = {handleOnClick}></BotonSiguiente>
        </div>
    )
}

export default Pregunta3;