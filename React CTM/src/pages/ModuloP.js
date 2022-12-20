import React, {useCallback} from "react";
import { useNavigate } from "react-router";
import { Headermain, ModuloProtege } from "../components";
import FooetrClases from "../components/FooterClases/FooetrClases";
import regresar1 from '../assets/regresar.png'

const ModuloP = () =>{
    const navigate = useNavigate();
    const handleOnClick = useCallback(
        () => navigate("/", {}, [navigate]))
    return(
        <div>
        <Headermain/>
        <ModuloProtege/>
        <div class="container-lg d-flex justify-content-between">
    <button type="buttom" class="btn btn-outline-primary"
    onClick={()=> {
      handleOnClick();
  }}> 
    <img src={regresar1} width="30"/>Regresar</button>
    </div>
        <FooetrClases/>
        </div>
    )
}

export default ModuloP;