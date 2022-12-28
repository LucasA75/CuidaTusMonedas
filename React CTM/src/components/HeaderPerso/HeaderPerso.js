import React from "react";
import logo from '../../assets/logo.png';
import gatopage from '../../assets/gatopage.png'
import './HeaderPerso.css'
import catluna from '../../assets/catluna.png'
import gatolente from '../../assets/gatolente.png'
import flecha from '../../assets/flecha.png'
import { useAuth0 } from '@auth0/auth0-react'


const HeaderPerso = () => {

    const { user, isAuthenticated, isLoading } = useAuth0();

    return (isAuthenticated && (
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
                            <a class="nav-link p-2" href="/Perfil">Perfil</a>
                            <img src={gatopage} alt="Logo" width="100" height="100" class="d-inline-block align-text-top logo" />

                        </div>
                    </div>
                </div>
            </nav>
            <div class=" d-flex justify-content-around saludo">
                <div class="d-flex align-content-center flex-wrap"> <h2 class="hola">¡Hola {user.name}!</h2> </div>
                <div class="d-flex align-content-center flex-wrap progreso">
                    <center>
                        <div><h4>Tu progreso actual es de: 0% <br /> <br />
                            ¡Sigue así!</h4> </div></center>
                </div>
                <div class="d-flex align-content-center flex-wrap"> <img src={catluna} alt="Logo" width="100" /> </div>
            </div>
            <center>
                <div class="container-fluid modulos">
                    <div class="d-flex justify-content-around align-content-center flex-wrap">
                        <div class="d-flex align-content-center flex-wrap"> <h3> Mis modulos</h3> </div>
                        <div class="d-flex align-content-center flex-wrap"> <button type="button" class="btn-sm btn-outline-dark"> + Nuevo módulo</button></div>

                        {/* popup */}
                    </div>
                    <div class="overlay" id="overlay">
                        <div class="popup" id="popup">
                            <a href="#" id="btn-cerrar-popup" class="btn-cerrar-popup"><i class="fas fa-times"></i></a>
                            <h2 class="tituloregistrate">ENCUESTA</h2>
                            <h4 class="empiezaaaprender">Que te interesa aprender?</h4>
                            <form action="">
                                <div class="contenedor-inputs">
                                    <input type="checkbox" name="box1" id="box1" />
                                    <label for="info">Proteger tus monedas</label>
                                    <br />
                                    <input type="checkbox" name="box2" id="box2" />
                                    <label for="info">Administrar tus monedas</label>
                                    <br />
                                    <input type="checkbox" name="box3" id="box3" />
                                    <label for="info">Invertir tus monedas</label>
                                    <br />
                                </div>
                                <input type="submit" class="btn-submit" value="Registrarse"></input>
                            </form>
                        </div>
                    </div>

                </div>
            </center>

        </div>

    )
    )
}
export default HeaderPerso;