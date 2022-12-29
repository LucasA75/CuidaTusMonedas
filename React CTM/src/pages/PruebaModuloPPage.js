import React, { useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import { FooetrClases, HeaderGenerico } from '../components'
import Evaluacion from '../components/Evaluacion/Evaluacion'
import regresar1 from '../assets/regresar.png'
import botonsiguiente1 from '../assets/botonsiguiente.png'
import AppEvaluacion from '../components/Evaluacion/AppEvaluacion'

const PruebaModuloPPage = () => {

    const navigate = useNavigate();
    const handleOnClick = useCallback(
        () => navigate("/EvitarEstafa", {}, [navigate]))

    const navigate2 = useNavigate();
    const handleOnClick2 = useCallback(
        () => navigate2("/ProfundizaEstafa", {}, [navigate2]))
        
    return (
        <div>
            <HeaderGenerico />
            <AppEvaluacion />
            
        <div class="container-lg d-flex justify-content-between" style={{marginTop:"20vh"}}>

        <button type="buttom" class="btn btn-outline-primary" 
        onClick={()=> {
            handleOnClick();
        }}> <img src={regresar1} width="30" />Regresar</button>

        <button type="buttom" class="btn btn-outline-success" 
        onClick={()=> {
                handleOnClick2();
            }}> <img src={botonsiguiente1} width="30" />Siguiente</button>
        </div>

            
            {/* Este className se ocupa para dejar abajo el footer cuando se necesite, no se ocupa en todos los casos */}
            <div className='FooterIndice'>
                <FooetrClases />
            </div>
        </div>
    )
}

export default PruebaModuloPPage