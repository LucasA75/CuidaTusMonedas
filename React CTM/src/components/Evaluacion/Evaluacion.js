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
            
            <ul class="list-group list-group-horizontal justify-content-around"> 

                
                <a data-toggle="popover" title="Parece que no pusiste mucha atención :c" data-content="Felicidades!" data-trigger="focus"><li>
                <button type="button" class="btn btn-warning">
                    Por supuesto
                  </button></li></a>

                <a data-toggle="popover" title="Respuesta correcta!" data-content=":D" data-trigger="focus"><li>
                <button type="button" class="btn btn-warning">
                    Ni de chiste
                  </button></li></a>

                  <a data-toggle="popover" title="Ups, sigue leyendo un poco más :s" data-content="x.x" data-trigger="focus"><li>
                <button type="button" class="btn btn-warning">
                    Lo pensaría
                  </button></li></a>                          
                              
                    
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
            
            <ul class="list-group list-group-horizontal justify-content-around">
            <a data-toggle="popover" title="Parece que no pusiste mucha atención :c" data-content="Felicidades" data-trigger="focus"><li>
                <button type="button" class="btn btn-warning">
                    Voy de cabeza
                  </button></li></a>

                <a data-toggle="popover" title="Ups, sigue leyendo un poco más :s" data-content=":D" data-trigger="focus"><li>
                <button type="button" class="btn btn-warning">
                    Le pido una reunión
                  </button></li></a>

                  <a data-toggle="popover" title="Vale, sí entendiste todo :D" data-content="x.x" data-trigger="focus"><li>
                <button type="button" class="btn btn-warning">
                    No me interesa
                  </button></li></a>  
                
            
            </ul>
           
            </div>
                
            
           
           
            
         </div>
            
         </div>
             </center>
    </div>
  )
}

export default Evaluacion