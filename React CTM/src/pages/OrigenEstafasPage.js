import React, {useCallback} from 'react'
import { useNavigate } from 'react-router'
import { FooetrClases, HeaderGenerico} from '../components'
import OrigenEstafas from '../components/OrigenEstafas/OrigenEstafas'
import ilustracionEstafa from '../assets/ilustracionestafa.png'
import botonsiguiente1 from '../assets/botonsiguiente.png'
import regresar1 from '../assets/regresar.png'

const OrigenEstafasPage = () => {
  const navigate = useNavigate();
  const handleOnClick = useCallback(
      () => navigate("/InPira", {}, [navigate]))

  const navigate2 = useNavigate();
  const handleOnClick2 = useCallback(
      () => navigate2("/EsquemaPiramidal", {}, [navigate2]))
  return (
    <div>
        <HeaderGenerico/>
        <OrigenEstafas/>
        <center> <img src={ilustracionEstafa} width="500"/></center>
        <div class="container-lg d-flex justify-content-between">
        <button type="buttom" class="btn btn-outline-primary"
        onClick={()=> {
          handleOnClick();
      }}> 
      <img src={regresar1} width="30"/>Regresar</button>

        <button type="buttom" class="btn btn-outline-success"
        onClick={()=> {
                handleOnClick2();
            }}> 
        <img src={botonsiguiente1} width="30"/>Siguiente</button>
        </div>
        
        
        <FooetrClases/>
    </div>
  )
}

export default OrigenEstafasPage