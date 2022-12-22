import React from 'react'
import inviertemoneda from '../../assets/inviertemoneda.png'

const InvierteMoneda = () => {
  return (
    <div class="fondoModulo">
    <a style={{textDecoration: "none"}} href="/ModuloI">
    <div class="container-lg d-flex justify-content-around  avance">

        
            <div> <img src={inviertemoneda} alt="Gato con Lentes" /> </div>
            <div> <h3>Invierte tus <br/> modedas</h3></div>
            <h3>0%</h3>
            <div> <img src={flecha} alt="Flechita"/></div>
        
    </div>
    </a>
    </div>
  )
}

export default InvierteMoneda