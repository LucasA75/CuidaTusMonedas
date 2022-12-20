import React from 'react'
import "./LeccionesIndex.css"
import linea from "../../assets/Linea.png"


const LeccionesIndex = () => {
  return (
    <div>
        <div className='container-md Introduccion'>
        En estas lecciones aprenderás qué son las estafas piramidales, cuáles son las estafas más famosas, cómo identificar una estafa y consejos sobre cómo evitar caer en una de estas estafas, al finalizar se hará una pequeña evaluación para verificar todo lo aprendido. Que disfrutes aprendiendo!
        </div>
        <br></br>
        <div class="container-md">
        <div class="row rowindex">
            <div class="col colum1I">
            <a style={{textDecoration: "none"}} href='/OrigenEstafas'>
            <p>Origen de las estafas piramidales</p>
            </a>
                <p>¿Qué es un esquema ponzi?</p>
                <p>Cómo evitar una estafa piramidal</p>
                <p>Evaluación</p>
            </div>
            <div class="col colum3I">
                <p>¿Qué es un esquema piramidal?</p>
                <p>¿Cómo identificar una estafa piramidal?</p>
                <p>Casos famosos de estafas piramidales</p>
                <p>Profundiza</p>
            </div>
        </div>
        <div className='Linea1'>
          <img src={linea} alt="linea"/>
        </div>
        </div>
    </div>

  )
}

export default LeccionesIndex;
