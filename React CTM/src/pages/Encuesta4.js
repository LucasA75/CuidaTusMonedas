import React from "react";
import { Headermain } from "../components";
import Recuadro from "../components/RecuadroEncuesta/Recuadro";
import encuesta4 from "../assets/encuesta4.png"

const Encuesta4 = () => {
    return (
        <>
            <Headermain />
            <center>
                <h1 class="texto">¡Listo!</h1>
            </center>
            <div>
                <img src={encuesta4} alt="foto gato lentes" className="gatolentes"
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
export default Encuesta4;