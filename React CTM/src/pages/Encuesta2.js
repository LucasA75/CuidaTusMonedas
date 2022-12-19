import React from "react";
import { Headermain } from "../components";
import Pregunta2 from "../components/RecuadroEncuesta/Pregunta2";
import encuesta2 from "../assets/encuesta2.png"

const Encuesta2 = () => {
    return (
        <>
            <Headermain />
            <center>
                <h1 class="texto">¿Qué te interesa aprender?</h1>
            </center>
            <div>
                <img src={encuesta2} alt="foto gato celu y manta" className="gatocelumanta"
                    position="flex"
                    width="35%"

                    float="left"
                    margin-top="50px" />
                <Pregunta2>
                </Pregunta2>
            </div>

        </>
    )
}
export default Encuesta2;