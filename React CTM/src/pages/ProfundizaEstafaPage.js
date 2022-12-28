import React, { useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import { FooetrClases, HeaderGenerico } from '../components'
import ProfundizaEstafa from '../components/ProfundizaEstafa/ProfundizaEstafa'
import regresar1 from '../assets/regresar.png'
import botonsiguiente1 from '../assets/botonsiguiente.png'

const ProfundizaEstafaPage = () => {
    const navigate = useNavigate();
    const handleOnClick = useCallback(
        () => navigate("/EvaluacionEstafa", {}, [navigate]))

    const navigate2 = useNavigate();
    const handleOnClick2 = useCallback(
        () => navigate2("/ModuloP", {}, [navigate2]))
    return (
        <div>
            <HeaderGenerico />
            <ProfundizaEstafa />
            <div class="container-lg d-flex justify-content-between">

                <button type="buttom" class="btn btn-outline-primary"
                    onClick={() => {
                        handleOnClick();
                    }}> <img src={regresar1} width="30" />Regresar</button>

                <button type="buttom" class="btn btn-outline-success"
                    onClick={() => {
                        handleOnClick2();
                    }}> <img src={botonsiguiente1} width="30" />Siguiente</button>
            </div>
            <div className='FooterIndice'>
                <FooetrClases />
            </div>
        </div>
    )
}

export default ProfundizaEstafaPage