import React,{useCallback} from "react";
import { useNavigate } from "react-router-dom";
import logo from '../../assets/logo.png';
import "./Headermain.css"

const Headermain = () => {    
    return (
        <div className="header">
            <nav class="navbar navbar-expand-lg bg-light" >
                <div class="container-fluid head">
                    <a class="navbar-brand" href="/#">
                        <img src={logo} alt="Logo" width="100" height="100" class="d-inline-block align-text-top logo" />
                    </a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse " id="navbarNavAltMarkup">
                        <div class="navbar-nav">
                            <a class="nav-link" href="/Conocenos">Conócenos</a>
                            <a class="nav-link" href="/#">Ayuda</a>
                            <div className="iniciarsesion">
                            <a class="nav-link" href="/IniciarSesion">Iniciar sesión</a>   
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </div>

    );
}
export default Headermain;