import React,{useCallback} from "react";
import { useNavigate } from "react-router-dom";
import logo from '../../assets/Logo2.png'
import "./Headermain.css"
import { LoginBoton } from "../Autenticacion/Autenticacion";
import CerrarSesion from "../Autenticacion/CerrarSesion";
import { useAuth0 } from "@auth0/auth0-react";
import userEvent from "@testing-library/user-event";

const Headermain = () => {  

    const {user, isAuthenticated, isLoading} = useAuth0();
    const navigate = useNavigate();
    const handleOnClick = useCallback(
        () => navigate("/IniciarSesion", {}, [navigate]))  
    return (
        <div className="headerMain">
            <nav class="navbar navbar-expand-lg bg-light navbarMain" >
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
                            
                            <div className="botonesMain">

                            {/* Si esta authenticado mostrara el cerrar sesion , si no (que es lo que esta en : ) mostrara el iniciar secion*/}
                            {isAuthenticated ? <>
                            {user.name}
                            <br></br>
                            <CerrarSesion/>

                            </>
                            :
                            <LoginBoton/>
                            }
                            
                            </div>
                        </div>
                    </div>
            </nav>
        </div>

    );
}
export default Headermain;