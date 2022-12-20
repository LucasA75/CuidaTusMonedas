import React from "react";
import { FooetrClases, Headermain} from "../components";
import encuesta1 from "../assets/encuesta1.png";
import Pregunta1 from "../components/RecuadroEncuesta/Pregunta1";



const Encuesta1 = () => {
    return (
        <>
            <Headermain />
            <center>
            &nbsp;
                <h1 class="texto">Comencemos tu registro</h1>
            </center>
            <div>
                <img src={encuesta1} alt="foto gato celu" className="gatocelu"
                    position="flex"
                    width="35%"

                    float="left"
                    margin-top="50px" />
               
                <Pregunta1/>
                
            </div>
        
        </>
    )
}
export default Encuesta1;