import React from 'react'
import gatitomeme from '../../assets/gatitomeme.png'

const EvitarEstafa = () => {
  return (
    <div>
                <div class="container tituloClases">
            <h3> ¿Cómo evitar una estafa piramidal?</h3>
         </div>      
        <center>
        <div class="container subtituloClases">
          <p class="fs-2"> Debes estar alerta a lo siguiente</p>             
         </div> </center>
         
         <div class="container-lg contenidoClase">
            <p class="fs-4 text-justify">
            Ten cuidado con las tácticas que se usan para que estés dispuesto a escuchar la promoción; por ejemplo, a veces se ofrece una comida gratuita por asistir a un "seminario sobre inversiones". <br/><br/>

Resiste las tácticas de venta agresivas. Los vendedores sin escrúpulos intentarán convencerte de que, si no actúas ya, te perderás la oportunidad de tu vida. Toma todo el tiempo que necesites para decidir si una inversión es adecuada para ti.<br/><br/>

Si alguien está promocionando una estupenda operación de mercadeo o ventas, insiste en que te enseñe los estados financieros, auditados por un contador público certificado, que demuestren que los ingresos de la empresa provienen de la venta de productos o servicios, y no de la captación de cada vez más participantes.<br/><br/><br/>

Debes prestar atención porque,<br/><br/><br/>

-El dinero no crece en los árboles ni por generación espontánea, entones si no hay nada que respalde esas ganancias, cuidado.<br/><br/>

-Debes sospechar que estás frente a una estafa piramidal si los rendimientos que te ofrecen son estratosféricos.<br/><br/>

-Sospecha si te dicen que tu capital se va a duplicar o triplicar en unos cuantos meses.<br/><br/>
            </p>
            
         </div>
         <center>
         <div>
            <img src={gatitomeme} width="200"/>
         </div>
             </center>
        
    </div>
  )
}

export default EvitarEstafa