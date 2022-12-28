import { ArrowForwardIos } from "@mui/icons-material";
import React from "react";
import { useAuth0 } from '@auth0/auth0-react';
import fotomain from "../../assets/imagenMain.png"
import "./Main.css"


const MainV2 = () => {
    const {loginWithRedirect} = useAuth0();

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
                <button type="btn" class="btn botonMain"
                    onClick={() => {
                        loginWithRedirect();
                    }}> Comenzar a aprender &nbsp;  &nbsp;<ArrowForwardIos style={{marginBottom: "4px"}}/></button>

                    
            </div>
        </div>
    )
}

export default MainV2