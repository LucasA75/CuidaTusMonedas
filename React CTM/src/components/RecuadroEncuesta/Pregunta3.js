import React, { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import BotonSiguiente from './BotonEncuesta';
import BotonAtras from "./BotonAtras";


export const Pregunta3 = () => {

    const navigate = useNavigate();
    const handleOnClick = useCallback(
        () => navigate("/Encuesta4", {}, [navigate]))

    const navigate2 = useNavigate();
    const handleOnClick2 = useCallback(
        () => navigate2("/Encuesta2", {}, [navigate2]))

    return (
        <div class="container-lg encuesta">
            <center>
                <br></br>
                <br></br>
                <h3 class="pregunta">Déjanos tu correo electrónico para comenzar a crear tu cuenta y disfrutar de nuestro Newsletter</h3>
            </center>
            <br></br>
            <form>
                <label>
                    <input type="" class="form-control pregunta1" id="correoEnc" placeholder="Tu correo" /></label>
            </form>
            <br></br>
            <BotonAtras infoBoton2={"Atrás"} handleOnClick2={handleOnClick2}></BotonAtras>
            <BotonSiguiente infoBoton={"Siguiente"} handleOnClick={handleOnClick}></BotonSiguiente>
        </div>
    )
}

export default Pregunta3;