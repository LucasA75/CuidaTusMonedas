import React from "react";
import logo from '../../assets/logo.png';
import gatopage from '../../assets/gatopage.png'
import './HeaderPerso.css'


const HeaderPerso =()=>{
    return(
        <div>
        <nav class="navbar navbar-expand-lg bg-light" >
            <div class="container-fluid">
                <a class="navbar-brand" href="/#">
                    <img src={logo} alt="Logo" width="100" height="100" class="d-inline-block align-text-top logo" />
                </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse d-flex flex-row-reverse" id="navbarNavAltMarkup">
                    <div class="navbar-nav">
                        <a class="nav-link active p-2" aria-current="page" href="/#">Home</a>
                        <a class="nav-link p-2" href="/#">Conócenos</a>
                        <a class="nav-link p-2" href="/#">Ayuda</a>
                        <a class="nav-link p-2" href="/#">Perfil</a>
                        <img src={gatopage} alt="Logo" width="100" height="100" class="d-inline-block align-text-top logo" />

                    </div>
                </div>
            </div>
        </nav>
        <div class="saludo ">
            <h2 class="hola">¡Hola Alín!</h2>
            <h4 class="progreso">Tu progreso actual es de: </h4>

            <h4 class="saludo2">¡Sigue así!</h4>
        </div>
    </div>

    )
}
export default HeaderPerso;