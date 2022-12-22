import React, {useCallback} from 'react'
import { useNavigate } from 'react-router-dom'
import { FooetrClases, HeaderGenerico } from '../components'
import IdentificaEstafa from '../components/IdentificaEstafa/IdentificaEstafa'
import regresar1 from '../assets/regresar.png'
import botonsiguiente1 from '../assets/botonsiguiente.png'

const IdentificaEstafaPage = () => {
    const navigate = useNavigate();
    const handleOnClick = useCallback(
        () => navigate("/EsquemaPonzi", {}, [navigate]))

    const navigate2 = useNavigate();
    const handleOnClick2 = useCallback(
        () => navigate2("/CasosFamosos", {}, [navigate2]))

  return (
    <div>
        <HeaderGenerico/>
        <IdentificaEstafa/>

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

export default IdentificaEstafaPage