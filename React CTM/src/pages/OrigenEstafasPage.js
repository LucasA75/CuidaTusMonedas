import React from 'react'
import { FooetrClases, Headermain } from '../components'
import OrigenEstafas from '../components/OrigenEstafas/OrigenEstafas'
import ilustracionEstafa from '../assets/ilustracionestafa.png'
import botonsiguiente1 from '../assets/botonsiguiente.png'

const OrigenEstafasPage = () => {
  return (
    <div>
        <Headermain/>
        <OrigenEstafas/>
        <center> <img src={ilustracionEstafa} width="500"/></center>
        <div class="container-lg d-flex justify-content-end">
        <button type="buttom" class="btn btn-outline-success"> <img src={botonsiguiente1} width="30"/>Siguiente</button>
        </div>
        
        
        <FooetrClases/>
    </div>
  )
}

export default OrigenEstafasPage