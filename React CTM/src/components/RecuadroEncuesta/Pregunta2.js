import React, { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import BotonSiguiente from './BotonEncuesta';
import BotonAtras from "./BotonAtras";


const Pregunta2 = () => {

    const navigate = useNavigate();
    const handleOnClick = useCallback(
        () => navigate("/Encuesta3", {}, [navigate]))

    const navigate2 = useNavigate();
    const handleOnClick2 = useCallback(
        () => navigate2("/Encuesta1", {}, [navigate2]))


    return (
        <div class="container-lg encuesta">
            <br></br>
            <br></br>
            <br></br>
            <h3 class="pregunta"> Hola "Nombre"</h3>
            <h6>Puedes seleccionar más de una alternativa</h6>
  
            <div class="form-check eleccion">
                <input class="form-check-input" type="checkbox" value="" id="comoadministrar" />
                Cómo administar mi dinero
            </div>
            <div class="form-check eleccion">
                <input class="form-check-input" type="checkbox" value="" id="comoinvertir" />
                Cómo invertir
            </div>
            <div class="form-check eleccion">
                <input class="form-check-input" type="checkbox" value="" id="comoevitar" />
                Cómo evitar estafas            
            </div>
            <br></br>
            <BotonAtras infoBoton2={"Atrás"} handleOnClick2={handleOnClick2}></BotonAtras>
            <BotonSiguiente infoBoton={"Siguiente"} handleOnClick={handleOnClick}></BotonSiguiente>
        </div>

    )
}

export default Pregunta2