import React from "react";
import abril from "../../assets/abrilprofile.png"
import diego from "../../assets/diegoprofile.png"
import nico from "../../assets/nicoprofile.png"
import alin from "../../assets/alinprofile.png"
import lucas from "../../assets/lucasprofile.png"



const Equipo = () => {
    return (
        <div>
            <center><b><h1 class="tituloconocenos">Conócenos</h1></b></center>
            <br/>
            <center><h4 class="sobrenosotros">Equipo de Desarrolladores "5codigo"</h4></center>

            <div class="row row-cols-5">


                <div class="card-abril">
                    <div class="card h-300">
                        <img src={abril} class="Abril Bracamonte Perfil" alt="..." />
                        <div class="card-body">
                            <h4 class="card-title">Abril Bracamonte</h4>
                            <p class="card-text">Desarrolladora Full Stack.</p>
                        </div>
                        <div class="card-footer">
                            <a href="https://www.linkedin.com/in/abril-bracamonte-torrez-a9750a185/">LinkedIn</a>
                        </div>
                    </div>
                </div>

                <div class="card-nico">
                    <div class="card h-300">
                        <img src={nico} class="Nicolas Noimann perfi" alt="..." />
                        <div class="card-body">
                            <h4 class="card-title">Nicolas Noimann</h4>
                            <p class="card-text">Desarrollador Full Stack.</p>
                        </div>
                        <div class="card-footer">
                            <a href="https://www.linkedin.com/in/nicolas-noimann-97503b258/">LinkedIn</a>
                        </div>
                    </div>
                </div>

                <div class="card-alin">
                    <div class="card h-300">
                        <img src={alin} class="Alin Burgos perfil" alt="..." />
                        <div class="card-body">
                            <h4 class="card-title">Alin Burgos</h4>
                            <p class="card-text">Desarrolladora Full Stack.</p>
                        </div>
                        <div class="card-footer">
                            <a href="https://www.linkedin.com/in/alin-burgos-olivero-b48b7813b/">LinkedIn</a>
                        </div>
                    </div>
                </div>

                <div class="card-diego">
                    <div class="card h-300">
                        <img src={diego} class="Diego Gatica perfil" alt="..." />
                        <div class="card-body">
                            <h4 class="card-title">Diego Gatica</h4>
                            <p class="card-text">Desarrollador Full Stack.</p>
                        </div>
                        <div class="card-footer">
                            <a href="https://www.linkedin.com/in/diegogatica369/">LinkedIn</a>
                        </div>
                    </div>
                </div>

                <div class="card-lucas">
                    <div class="card h-300">
                        <img src={lucas} class="Diego Gatica perfil" alt="..." />
                        <div class="card-body">
                            <h4 class="card-title">Lucas Acevedo</h4>
                            <p class="card-text">Desarrollador Full Stack.</p>
                        </div>
                        <div class="card-footer">
                            <a href="https://www.linkedin.com/in/lucas-acevedo-castro/">LinkedIn</a>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}


export default Equipo;