import React,{useCallback} from "react";
import { useNavigate } from "react-router-dom";
import logo from '../../assets/Logo2.png'
import "./Headermain.css"
import btninicio from '../../assets/btninicio.png'

const Headermain = () => {  
    const navigate = useNavigate();
    const handleOnClick = useCallback(
        () => navigate("/IniciarSesion", {}, [navigate]))  
    return (
        <div className="headerMain">
            <nav class="navbar fixed-top navbar-expand-lg bg-light navbarMain" >
                    <a class="navbar-brand" href="/#">
                        <img className="logo" src={logo} style={{ width:110 , height:130}}/>
                    </a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse " id="navbarNavAltMarkup">
                    {/* Aqui controlo el lado de posicion lateral con ms-auto */}
                        <div class="navbar-nav ms-auto d-flex align-items-center">
                            <a class="nav-link" href="/Conocenos">Conócenos</a>
                            <a class="nav-link" href="/#">Ayuda</a>
                            <div className="iniciarsesion">
                            <a class="nav-link" href="/IniciarSesion"> <button typr="btn "class="btn botonMainI" 
                            onClick={() => {
                            handleOnClick();
                            }}> Iniciar sesión <img src={btninicio} width="30"/></button></a>   
                            </div>
                        </div>
                    </div>
            </nav>
        </div>

    );
}
export default Headermain;