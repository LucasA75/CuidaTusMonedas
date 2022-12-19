import React from "react";
import { Headermain } from "../components";
import Recuadro from "../components/RecuadroEncuesta/Recuadro";
import encuesta3 from "../assets/encuesta3.png"

const Encuesta3 = () => {
    return (
        <>
            <Headermain />
            <center>
                <h1 class="texto">Ya casi terminamos...</h1>
            </center>
            <div>
                <img src={encuesta3} alt="foto gato compu" className="gatocompu"
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
export default Encuesta3;