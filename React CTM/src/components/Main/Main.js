import React, { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import fotomain from "../../assets/imagenMain.png"
import "./Main.css"

const Main = () => {
    const navigate = useNavigate();
    const handleOnClick = useCallback(
        () => navigate("/Encuesta1", {}, [navigate]))
        
    return (
        <div class="container text-center principal" >
            <div class="row align-items-start row1">
                <div class="col col1">
                    <h1 className="caption1">Aprender sobre finanzas es divertido</h1>
                </div>
                <div class="col col2">
                    <img src={fotomain} alt="foto gatito jugando" className="gatitojugando" />
                </div>
            </div>
            <div>
                <button type="btn" class="btn-abrir-popup"
                    onClick={() => {
                        handleOnClick();
                    }}> Comenzar a aprender</button>
            </div>

                    {/* implementacion de popup */}
            
            <div class="overlay">
                <div class="popup">
                    <a href="#" id="btn-cerrar-popup" class="btn-cerrar-popup"><i class="fas fa-times"></i></a>
                    <h2 class="tituloregistrate">REGISTRATE</h2>
                    <h4>y empieza a aprender</h4>
                    <form action="">
                        <div class="contenedor-inputs">
                            <input type="text" placeholder="Nombre"/>
						    <input type="email" placeholder="Correo"/>                           
                        </div>
                        <input type="submit" class="btn-submit" value="Registrarse"></input>
                    </form>
                </div>

            </div>


        </div>


    )
}

export default Main;

