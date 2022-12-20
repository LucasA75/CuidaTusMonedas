import React from "react";
import { Headermain } from "../components";
import encuesta3 from "../assets/encuesta3.png"
import { Pregunta3 } from "../components/RecuadroEncuesta/Pregunta3";

const Encuesta3 = () => {
    return (
        <>
            <Headermain />
            <center>
            &nbsp;
                <h1 class="texto">Ya casi terminamos...</h1>
            </center>
            <div>
                <img src={encuesta3} alt="foto gato compu" className="gatocompu"
                    position="flex"
                    width="35%"

                    float="left"
                    margin-top="50px" />
                <Pregunta3>
                </Pregunta3>
            </div>

        </>
    )
}
export default Encuesta3;