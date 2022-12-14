import React from "react";
import Rectangle from 'react-rectangle';


const Recuadro = () => {     

    return (

    <div class="container py-4">
  
      <div class="row align-items-md-stretch">
      <div class="col-md-6">
        <div class="recuadro">
          <h2><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">cambiar el fondo</font></font></h2>
          <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Cambie la utilidad de color de fondo y agregue una utilidad de color `.text-*` para mezclar el aspecto jumbotron. </font><font style="vertical-align: inherit;">Luego, mezcle y combine con temas de componentes adicionales y más.</font></font></p>
          <button class="btn btn-outline-light" type="button"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Botón de ejemplo</font></font></button>
        </div>
      </div>
      <div class="col-md-6">
        <div class="h-100 p-5 bg-light border rounded-3">
          <h2><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Agregar bordes</font></font></h2>
          <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">O manténgalo ligero y agregue un borde para una definición adicional a los límites de su contenido. </font><font style="vertical-align: inherit;">Asegúrese de mirar debajo del capó el HTML de origen aquí, ya que hemos ajustado la alineación y el tamaño del contenido de ambas columnas para que tengan la misma altura.</font></font></p>
          <button class="btn btn-outline-secondary" type="button"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Botón de ejemplo</font></font></button>
        </div>
      </div>
    </div>
  </div>
  )
}


export default Recuadro;

