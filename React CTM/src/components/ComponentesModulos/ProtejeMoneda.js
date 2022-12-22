import React from 'react'
import gatolente from '../../assets/gatolente.png'
import flecha from '../../assets/flecha.png'
import './Modulos.css'

const ProtejeMoneda = () => {
  return (
    <div class="fondoModulo">
    <a style={{textDecoration: "none"}} href="/ModuloP">
    <div class="container-lg d-flex justify-content-around  avance">

        
            <div> <img src={gatolente} alt="Gato con Lentes" /> </div>
            <div> <h3>Protege tus <br/> modedas</h3></div>
            <h3>0%</h3>
            <div> <img src={flecha} alt="Flechita"/></div>
        
    </div>
    </a>
    </div>
  )
}

export default ProtejeMoneda;