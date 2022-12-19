import React from 'react'
import "./LeccionesIndex.css"
const LeccionesIndex = () => {
  return (
    <div>
        <div className='container-md Introduccion'>
        En estas lecciones aprenderas que son las estafas piramidales , cuales son las estafas mas famosas , como identificar una estafa y consejos sobre como evitar caer en una de estas estafas, al finalizar se hara una pequeña evaluacion para verificar todo lo aprendido. Que disfrutes aprendiendo!
        </div>
        <br></br>
        <div class="row rowindex">
            <div class="col colum1I">
            <a href='/'>
            <p>Origen de las estafas piramidales</p>
            </a>
                <p>¿Que es un esquema ponzi?</p>
                <p>Cómo evitar una estafa piramidal</p>
                <p>Evaluación</p>
            </div>
            <div class="col colum3I">
                <p>¿Que es un esquema piramidal?</p>
                <p>¿Como identificar una estafa piramidal?</p>
                <p>Casos famosos de estafas piramidales</p>
                <p>Profundiza</p>
            </div>
        </div>
    </div>

  )
}

export default LeccionesIndex;
