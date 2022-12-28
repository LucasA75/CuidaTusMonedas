import React from "react";
import fotomain from "../../assets/imagenMain.png";
import "./Main.css";

const Main = () => {
   
    return (
        <div class="container-fluid text-center principal" >
            <div class="row align-items-start row1M">
                <div class="col col1M">
                    <h1 className="caption1">Aprender sobre finanzas es divertido</h1>
                </div>
                <div class="col col2M">
                    <img src={fotomain} alt="foto gatito jugando" className="gatitojugando" />
                </div>
            </div>
            <div>
                <button type="btn" class="comienzaprender" id="comienzaprender"
                    > Comenzar a aprender</button>
            </div>

        </div>


    )
}



export default Main;

