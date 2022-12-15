import React from "react";
import logo from '../../assets/logo.png';
import gatopage from '../../assets/gatopage.png'
import './HeaderPerso.css'
import catluna from '../../assets/catluna.png'
import gatolente from '../../assets/gatolente.png'
import flecha from '../../assets/flecha.png'



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
        <div class=" d-flex justify-content-around saludo">
            <div class="d-flex align-content-center flex-wrap"> <h2 class="hola">¡Hola Alín!</h2> </div>
            <div class="d-flex align-content-center flex-wrap progreso">
                <div><h4>Tu progreso actual es de: <br/> <br/>
                    ¡Sigue así!</h4> </div>
            </div>
            <div class="d-flex align-content-center flex-wrap"> <img src={catluna} alt="Logo" width="100" /> </div>
        </div>
        <center>
        <div class="container-fluid modulos">
            <div class="d-flex justify-content-around align-content-center flex-wrap"> 
            <div class="d-flex align-content-center flex-wrap"> <h3> Mis modulos</h3> </div>
            <div class="d-flex align-content-center flex-wrap"> <button type="button" class="btn btn-success"> + Nuevo módulo</button></div>
            </div>
            <div class="container-lg d-flex justify-content-around  avance">

                
                    <div> <img src={gatolente} alt="Gato con Lentes" /> </div>
                    <div> <h3>Protege tus <br/> modedas</h3></div>
                    <div> <img src={flecha} alt="Flechita"/></div>
                
            </div>

           

        </div>
         </center>

    </div>

    )
}
export default HeaderPerso;