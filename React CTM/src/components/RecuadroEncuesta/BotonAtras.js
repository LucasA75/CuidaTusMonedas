import React from "react";
import "./Recuadro.css";

export const BotonAtras = ({infoBoton2, handleOnClick2}) => {
  return (
    <div >
      <button class="atras"
        onClick={() => {
          handleOnClick2();
        }}
        type="button">{infoBoton2}</button>
    </div>
  )
}

export default BotonAtras
