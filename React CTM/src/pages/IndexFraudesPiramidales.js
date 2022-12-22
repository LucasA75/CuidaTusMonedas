import React, {useCallback} from 'react'
import { useNavigate } from 'react-router'
import { FooetrClases, HeaderIndex, Headermain, LeccionesIndex } from '../components'
import regresar1 from '../assets/regresar.png'


const IndexFraudesPiramidales = () => {
  const navigate = useNavigate();
  const handleOnClick = useCallback(
      () => navigate("/ModuloP", {}, [navigate]))
  return (

    <div>
    <Headermain/>
    <HeaderIndex/>
    <LeccionesIndex/>
    <div class="container-lg d-flex justify-content-between">
    <button type="buttom" class="btn btn-outline-primary"
    onClick={()=> {
      handleOnClick();
  }}> 
    <img src={regresar1} width="30"/>Regresar</button>
    </div>
    <div className='FooterIndice'>
      <FooetrClases/>
    </div>
    </div>
  )
}

export default IndexFraudesPiramidales