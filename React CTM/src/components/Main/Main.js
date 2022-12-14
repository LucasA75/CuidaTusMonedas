import React from "react";
import fotomain from "../../assets/imagenMain.png"
import "./Main.css"


const Main = () =>{
    return(
        <div class="container text-center" >
            <div class="row align-items-start">
                <div class="col col1">
                <h1 className="h1">Aprender a invertir es divertido</h1>
                </div>
                <div class="col col2">
                <img src={fotomain} alt="foto gatito jugando" className="gatitojugando"/>
                </div>
            </div>

        </div>

    )
}

export default Main;