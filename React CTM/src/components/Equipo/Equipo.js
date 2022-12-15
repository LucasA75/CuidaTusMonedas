import React from "react";
import abril from "../../assets/abrilprofile.png"
import diego from "../../assets/diegoprofile.png"
import nico from "../../assets/nicoprofile.png"
import alin from "../../assets/alinprofile.png"
import lucas from "../../assets/lucasprofile.png"



const Equipo = () => {
    return (
        <div>
            <center><h1 class="h1">Conócenos</h1></center>
            <center><h2 class="h2">Sobre nosotros</h2></center>

            <div class="row row-cols-5">

                <div class="col0">
                    <div class="card h-300"  >
                        <img src={abril} class="Abril Bracamonte Perfil" alt="..." />
                        <div class="card-body">
                            <h4 class="card-title">Abril Bracamonte</h4>
                            <p class="card-text">Desarrolladora Full Stack.</p>
                        </div>
                        <div class="card-footer">
                            <small class="text-muted">LinkedIn</small>
                        </div>
                    </div>
                </div>

                <div class="col2">
                    <div class="card h-300">
                        <img src={nico} class="Nicolas Noimann perfi" alt="..." />
                        <div class="card-body">
                            <h4 class="card-title">Nicolas Noimann</h4>
                            <p class="card-text">Desarrollador Full Stack.</p>
                        </div>
                        <div class="card-footer">
                            <small class="text-muted">LinkedIn</small>
                        </div>
                    </div>
                </div>

                <div class="col3">
                    <div class="card h-300">
                        <img src={alin} class="Alin Burgos perfil" alt="..." />
                        <div class="card-body">
                            <h4 class="card-title">Alin Burgos</h4>
                            <p class="card-text">Desarrolladora Full Stack.</p>
                        </div>
                        <div class="card-footer">
                            <small class="text-muted">LinkedIn</small>
                        </div>
                    </div>
                </div>

                <div class="col4">
                    <div class="card h-300">
                        <img src={diego} class="Diego Gatica perfil" alt="..." />
                        <div class="card-body">
                            <h4 class="card-title">Diego Gatica</h4>
                            <p class="card-text">Desarrollador Full Stack.</p>
                        </div>
                        <div class="card-footer">
                            <small class="text-muted">LinkedIn</small>
                        </div>
                    </div>
                </div>

                <div class="col1">
                    <div class="card h-300">
                        <img src={lucas} class="Lucas Acevedo perfil" alt="..." />
                        <div class="card-body">
                            <h4 class="card-title">Lucas Acevedo</h4>
                            <p class="card-text">Desarrollador Full Stack.</p>
                        </div>
                        <div class="card-footer">
                            <small class="text-muted">LinkedIn</small>
                        </div>
                    </div>
                </div>

            </div>
            <center>
                <div class="rectangulo">
                    <div>
                        <div><h4>Nuestra Misión</h4></div>
                        <p> Nuestra Misión es dar las herramientas y conocimientos necesarios <br></br>
                            a través de una plataforma web para que los jóvenes<br></br> tomen control total de sus finanzas personales y sepan como utilizar el dinero de manera inteligente.</p>
                    </div>
                </div>
            </center>
            <br></br>
            <center>
                <div class="rectangulo1">
                    <div>
                        <div><h4>Nuestra Visión</h4></div>
                        <p> Que jóvenes adquieran los conocimientos necesarios para tomar control sobre su futuro financiero. </p>
                    </div>
                </div>
            </center>




        </div>



    )
}
export default Equipo;