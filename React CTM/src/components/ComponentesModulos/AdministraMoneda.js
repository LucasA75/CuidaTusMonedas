import React from 'react'
import moneda1 from '../../assets/moneda1.png'

const AdministraMoneda = () => {
  return (
    <div class="fondoModulo">

      <a style={{ textDecoration: "none" }} href="/ModuloA">
        <div class="container-lg d-flex justify-content-around  avance">


          <div> <img src={moneda1} alt="Gato con Lentes" /> </div>
          <div> <h3>Administra tus <br /> modedas</h3></div>
          <h3>0%</h3>
          <div> <img src={flecha} alt="Flechita" /></div>

        </div>
      </a>
    </div>
  )
}

export default AdministraMoneda