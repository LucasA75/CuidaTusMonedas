import React from "react";
import "../MisionVision/MisionVision.css"

const MisionVision = () => {
    return (
        <div>
            <center>
                <div class="rectangulomision">
                    <div>
                        <div>
                            <h1 id="titulomision">Nuestra Misión</h1>
                        </div>
                        <br/>
                        <b><h4 class="mision"> Nuestra Misión es dar las herramientas y conocimientos necesarios <br></br>
                            a través de una plataforma web para que los jóvenes<br></br> tomen control total de sus finanzas
                            personales y sepan como utilizar el dinero de manera inteligente.</h4></b>
                    </div>
                </div>
            </center>
            <br></br>
            <center>
                <div class="rectangulovision">
                    <div>
                        <div>
                            <h1 id="titulovision">Nuestra Visión</h1>
                        </div>
                        <br/>
                        <h4 class="vision"> Que jóvenes adquieran los conocimientos necesarios para tomar control sobre su futuro financiero.
                        </h4>
                    </div>
                </div>
            </center>
        </div>

    )
}

export default MisionVision;