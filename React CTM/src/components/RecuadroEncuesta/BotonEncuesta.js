import React from "react";
import "./Recuadro.css";

const BotonSiguiente = ({ infoBoton, handleOnClick }) => {

  return (
    <div >
      <button class="botom"
        onClick={() => {
          handleOnClick();
        }}
        type="button">{infoBoton}</button>
    </div>


  )
}


export default BotonSiguiente;

