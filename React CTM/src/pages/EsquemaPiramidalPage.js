import React, {useCallback} from 'react'
import { useNavigate } from 'react-router';
import { FooetrClases, Headermain } from '../components';
import EsquemaPiramidal from '../components/EsquemaPiramidal/EsquemaPiramidal';
import meme2gato from '../assets/meme2gato.png';
import botonsiguiente1 from '../assets/botonsiguiente.png'
import regresar1 from '../assets/regresar.png'



const EsquemaPiramidalPage = () => {
    const navigate = useNavigate();
    const handleOnClick = useCallback(
        () => navigate("/OrigenEstafas", {}, [navigate]))

    const navigate2 = useNavigate();
    const handleOnClick2 = useCallback(
        () => navigate2("/EsquemaPonzi", {}, [navigate2]))
  return (
    <div>
        <Headermain/>
        <EsquemaPiramidal/>
        <center> <img src={meme2gato} width="400"/></center>
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

export default EsquemaPiramidalPage;