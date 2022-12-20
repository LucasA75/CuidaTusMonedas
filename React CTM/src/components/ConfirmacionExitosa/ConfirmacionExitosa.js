import React, {useCallback} from "react";
import { useNavigate } from "react-router-dom";
import "./ConfirmacionExitosa.css";
import gatitoCorazon from "../../assets/gatitoCorazon.png";

const ConfirmacionExitosa = () => {
    const handleOnClick = useCallback(() => navigate("/IniciarSesion", {}, [navigate]));

    const navigate = useNavigate();

  return (
    <div>
      {" "}
      <h1 class="tituloConfirmacionH1">Tu usuario se ha creado exitosamente</h1>
      <div class="gatitoCorazon23">
        <img src={gatitoCorazon} alt="nuestro logo" width={"400px"} />
      </div>
      <div class="botonIniciarSesionConfirm">
            <button type="button" class="btn btn-warning btn-lg" onClick={()=>{ handleOnClick();}} > <h7 class="h7">Ingresar</h7></button>
      </div>
    </div>
  );
};

export default ConfirmacionExitosa;
