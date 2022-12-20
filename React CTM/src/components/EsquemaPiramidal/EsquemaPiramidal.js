import React from 'react'

import './EsquemaPiramidal.css'
import gatocute from '../../assets/gatocute.png';


const EsquemaPiramidal = () => {


  return (
    <div>
        <div class="container tituloClases">
            <h3> ¿Qué es un esquema piramidal?</h3>
            
         </div>      
        <center>
        <div class="container subtituloClases">
          
          <img src={gatocute} width="200" height={100}/>            
         </div> </center>
         
         <div class="container contenidoClase">
            <p class="fs-4 text-justify">
            En las estafas piramidales se prometen grandes riquezas por la vía fácil, mediante oportunidades de inversiones o la comercialización de bienes y servicios de consumo. Los estafadores, ubicados en la cima de la pirámide, se acercan a posibles emprendedores, muchas veces por medio de las redes sociales, videos de YouTube, Instagram, anuncios en internet y "ponencias" sobre temas financieros. Con el pago de una cuota inicial, estos afortunados inversores pueden sumarse al equipo que vende tal o cual maravilloso producto. <br/> <br/>


Sin embargo, el verdadero gancho son las enormes ganancias que los participantes pueden recibir si logran atraer a otras personas al grupo, gracias a las comisiones que se les pagan por ello. Se supone que la siguiente ola de reclutas captará a más personas, y así sucesivamente. Mientras tanto, los de arriba se van quedando con una parte de cada una de las comisiones generadas. <br/><br/>


Las estafas piramidales se hacen pasar por negocios con suculentos retornos RÁPIDOS sin hacer mucho a cambio, es dinero fácil donde puedes perder mucho dinero.


            </p>

         </div>
    </div>
  )
}

export default EsquemaPiramidal;