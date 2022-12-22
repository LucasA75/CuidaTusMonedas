import React from 'react'
import esquema1 from '../../assets/esquema1.png'

const IdentificaEstafa = () => {
   


  return (
    <div>
        <div class="container tituloClases">
            <h3> ¿Cómo identificar una estafa piramidal?</h3>
         </div>      
        <center>
        <div class="container subtituloClases">
          <p class="fs-2"> Las puedes identificar porque cumplen con las siguientes características</p>             
         </div> </center>
         
         <div class="container-lg contenidoClase">
            <p class="fs-4 text-justify">
            · Un corredor de inversiones o asesor financiero promete que tu inversión logrará una tasa de rendimiento excepcionalmente alta, con poco o ningún riesgo.<br/><br/>

· Un promotor o vendedor te promete dinero fácil por vender un producto o servicio.<br/><br/>

· Para acceder a una supuesta oportunidad de venta, de negocio o de inversión, tienes que reclutar a otras personas para sumarse al programa, por lo cual recibirás comisiones.<br/><br/><br/>

Más breve y preciso, cumplen con lo siguiente:<br/><br/><br/>

-Alta rentabilidad en poco tiempo.<br/><br/>

-Captan a nuevos miembros.<br/><br/>

-No se conoce el origen de la rentabilidad, es decir, no sabes cómo es que va a incrementar tu dinero.<br/><br/>

-No existe control ni fiscalización.<br/><br/>

-Lazos cercanos y de confianza.<br/><br/>
            </p>
         
            

         </div>
         <div>
            <center> <img src={esquema1} width="500" height="400" alt="Esquema piramidal"/> </center> 
         
         </div>

    </div>
  )
}

export default IdentificaEstafa;