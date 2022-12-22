import React from 'react'
import './CasosEstafa.css'

const CasosFamosos = () => {
  return (
    <div>
        <div class="container tituloClases">
            <h3> Casos famosos de estafa piramidales</h3>
         </div>      
        <center>
        <div class="container subtituloClases">
          <p class="fs-2">En esta lección te presentaremos algunos de los casos más famosos sucedidos en Chile</p>             
         </div> </center>
         
         <div class="container-lg contenidoClase">
            <p class="fs-4 text-justify">
            Esta estafa afectó a más de 5.000 personas entre 2005 y 2006.
            </p>
            </div>

            <div class="container casosEstafa"> 
            <a id="quesosmagicos" href="https://www.t13.cl/noticia/nacional/Como-fue-la-estafa-piramidal-de-los-quesitos-magicos-en-Chile" style={{textDecoration:"none"}}> 
            <h4>Caso: Los quesitos mágicos</h4></a>
            </div>

            <div class="container-lg contenidoClase">
            <p class="fs-4 text-justify">
            410 denuncias recibidas por aproximadamente 612 millones en el año 2022
            </p>
            </div>

            <div class="container casosEstafa"> 
            <a id="quesosmagicos" href="https://www.biobiochile.cl/especial/bbcl-investiga/noticias/de-pasillo/2022/06/07/estafa-knightsbrige-410-denuncias-recibidas-por-aproximadamente-612-millones.shtml" style={{textDecoration:"none"}}> 
            <h4>Caso: Knigthbridge</h4></a>
            </div>
            

         

    </div>
  )
}

export default CasosFamosos