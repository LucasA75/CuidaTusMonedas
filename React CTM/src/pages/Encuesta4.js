import React from "react";
import { Headermain } from "../components";
import encuesta4 from "../assets/encuesta4.png"
import Pregunta4 from "../components/RecuadroEncuesta/Pregunta4";

const Encuesta4 = () => {
    return (
        <>
            <Headermain />
            <center>
            &nbsp;
                <h1 class="texto">¡Listo!</h1>
            </center>
            <div>
                <img src={encuesta4} alt="foto gato lentes" className="gatolentes"
                    position="flex"
                    width="35%"

                    float="left"
                    margin-top="50px" />
                <Pregunta4>
                </Pregunta4>
            </div>
        </>
    )
}
export default Encuesta4;