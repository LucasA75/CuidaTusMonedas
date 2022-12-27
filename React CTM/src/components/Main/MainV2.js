import { ArrowForwardIos } from "@mui/icons-material";
import React, { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import fotomain from "../../assets/imagenMain.png"
import "./Main.css"


const MainV2 = () => {

    const navigate = useNavigate();
    const handleOnClick = useCallback(
        () => navigate("/Encuesta1", {}, [navigate]))
        
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
                        handleOnClick();
                    }}> Comenzar a aprender &nbsp;  &nbsp;<ArrowForwardIos style={{marginBottom: "4px"}}/></button>

                    
            </div>
        </div>
    )
}

export default MainV2