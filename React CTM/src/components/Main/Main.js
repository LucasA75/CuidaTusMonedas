import React from "react";
import fotomain from "../../assets/imagenMain.png";
import "./Main.css";
import "./Popup.js";

const Main = () => {
   
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
                <button type="btn" class="btn-abrir-popup" id="btn-abrir-popup"
                    > Comenzar a aprender</button>
            </div>

            {/* implementacion de popup */}

            <div class="overlay" id="overlay">
                <div class="popup" id="popup">
                    <a href="#" id="btn-cerrar-popup" class="btn-cerrar-popup"><i class="fas fa-times"></i></a>
                    <h2 class="tituloregistrate">ENCUESTA</h2>
                    <h4 class="empiezaaaprender">Que te interesa aprender?</h4>
                    <form action="">
                        <div class="contenedor-inputs">
                        <input type="checkbox" name="box1" id="box1"/>
                        <label for="info">Proteger tus monedas</label>
                        <br/>
                        <input type="checkbox" name="box2" id="box2"/>
                        <label for="info">Administrar tus monedas</label>
                        <br/>
                        <input type="checkbox" name="box3" id="box3"/>
                        <label for="info">Invertir tus monedas</label>
                        <br/>
                        </div>
                        <input type="submit" class="btn-submit" value="Registrarse"></input>
                    </form>
                </div>

            </div>

        </div>


    )
}



export default Main;

