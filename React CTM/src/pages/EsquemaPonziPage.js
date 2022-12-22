import React, {useCallback} from 'react'
import { useNavigate } from 'react-router-dom';
import { FooetrClases, HeaderGenerico} from '../components';
import EsquemaPonzi from '../components/EsquemaPonzi/EsquemaPonzi';
import regresar1 from '../assets/regresar.png'
import botonsiguiente1 from '../assets/botonsiguiente.png'

const EsquemaPonziPage = () => {
    const navigate = useNavigate();
    const handleOnClick = useCallback(
        () => navigate("/EsquemaPiramidal", {}, [navigate]))

    const navigate2 = useNavigate();
    const handleOnClick2 = useCallback(
        () => navigate2("/IdentificaEstafa", {}, [navigate2]))

  return (
    <div>
        <HeaderGenerico/>
        <EsquemaPonzi/>

        <div class="container-lg d-flex justify-content-between">

        <button type="buttom" class="btn btn-outline-primary" 
        onClick={()=> {
            handleOnClick();
        }}> <img src={regresar1} width="30" />Regresar</button>

        <button type="buttom" class="btn btn-outline-success" 
        onClick={()=> {
                handleOnClick2();
            }}> <img src={botonsiguiente1} width="30" />Siguiente</button>
        </div>
        <FooetrClases/>

    </div>
  )
}

export default EsquemaPonziPage