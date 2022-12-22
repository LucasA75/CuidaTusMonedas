import React from 'react'
import './Evaluacion.css'

const Evaluacion = () => {
  return (
    <div>
        <div class="container tituloClases">
            <h3> Prueba</h3>
         </div>      
        <center>
        <div class="container subtituloClases">
          <p class="fs-2"> Ya hemos finalizado esta lección. Completa esta evaluación para verificar lo que has aprendido hasta ahora.</p>             
         </div> </center>
         
         <div class="container-fluid evaluacion">
            <div class="container-lg conteEva"> 
            <p class="fs-4 text-justify">
            Si una persona me ofrece una oportunidad de negocio pero para ellos debo reclutar a más personas, con seguridad debo aceptar la oferta sin dudar.
            </p>
            </div>
            
            <div>
            
            <ul class="list-group list-group-horizontal justify-content-center">
                <a id="option1" href="" style={{textDecoration:"none"}}> <li class="list-group-item list-group-item-warning">Por supuesto</li></a>

                <a id="option2" href="" style={{textDecoration:"none"}}><li class="list-group-item list-group-item-warning">Ni de chiste</li> </a>
            
                <a id="option3" href="" style={{textDecoration:"none"}}> <li class="list-group-item list-group-item-warning">Lo pensaría</li></a>
            
            </ul>
           
            </div>
                
            
           
           
            
         </div>
         <center>
         <div>

         <div class="container-fluid evaluacion">
            <div class="container-lg conteEva"> 
            <p class="fs-4 text-justify">
            Estás navegando por tu red social favorita y te encuentras
con un influencer que promete generar mucho dinero
en poco tiempo, ¿Qué haces?
            </p>
            </div>
            
            <div>
            
            <ul class="list-group list-group-horizontal justify-content-center">
                <a id="option1" href="" style={{textDecoration:"none"}}> <li class="list-group-item list-group-item-warning">Voy de cabeza</li></a>

                <a id="option2" href="" style={{textDecoration:"none"}}><li class="list-group-item list-group-item-warning">Le pido una reunión</li> </a>
            
                <a id="option3" href="" style={{textDecoration:"none"}}> <li class="list-group-item list-group-item-warning">No me interesa</li></a>
            
            </ul>
           
            </div>
                
            
           
           
            
         </div>
            
         </div>
             </center>
    </div>
  )
}

export default Evaluacion