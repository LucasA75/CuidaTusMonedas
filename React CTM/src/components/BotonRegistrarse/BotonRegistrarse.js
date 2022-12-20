import React from "react";
import "./BotonRegistrarse.css"

const BotonRegistrarse = ({infoBoton, handleOnClick}) =>{
    return(
        <div>
            <a class="botonRegistro"
            style={{textDecoration: "none"}}
            onClick={()=>{
                handleOnClick();
            }}>{infoBoton}</a>
        </div>
    )
}

export default BotonRegistrarse;