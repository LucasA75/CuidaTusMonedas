import React, {useCallback} from "react";
import { useNavigate } from "react-router-dom";
import "./ConfirmacionExitosa.css";
import gatitoCorazon from "../../assets/gatitoCorazon.png";

const ConfirmacionExitosa = () => {
    const handleOnClick = useCallback(() => navigate("/IniciarSesion", {}, [navigate]));

    const navigate = useNavigate();

  return (
    
    <center>
      <br></br>
          <div className="divSecundario">
      {" "}
      <br></br>
      <h1 className="tituloConfirmacionH1">Tu usuario se ha creado exitosamente</h1>
      
      <div>
        <img src={gatitoCorazon} alt="nuestro logo" width={"300px"} />
      </div>
      <br></br>
      <div>
            <button type="button" class="btn btn-warning btn-lg" onClick={()=>{ handleOnClick();}} > <h7 class="h7">Ingresar</h7></button>
      </div>
      <br></br>
      <br></br>
      <h2 className="subtituloConfirmacion">Comienza tus lecciones ahora!</h2>
    </div>

    </center>

  );
};

export default ConfirmacionExitosa;
