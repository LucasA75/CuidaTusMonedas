import React from "react";
import { Headermain } from "../components";
import Recuadro from "../components/RecuadroEncuesta/Recuadro";
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
                <Recuadro>
                </Recuadro>
            </div>

        </>
    )
}
export default Encuesta2;