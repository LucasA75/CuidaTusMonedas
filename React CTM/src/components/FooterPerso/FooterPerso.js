import React from "react";
import './FooterPerso.css'
import whatsapp from '../../assets/whatsapp.svg.png'
import telefono from '../../assets/telefono.png'
import mailsend from '../../assets/mailsend.svg.png'

const FooterPerso =()=>{
    return (
        <div>
            <div class="container-fluid recuadro1"> 
            <div class="container-lg consejo">
                <h3>Consejo del día</h3>
                <center> <h4> Usa protector solar</h4></center>

            </div>
            </div>
            <div class="container-fluid recuadro2"> 
            <div class="container-lg contacto1">
                <h4>¿Necesitas ayuda?</h4>
                <div class="d-flex justify-content-around">
                    <div class="ws1"> 
                        <img src={whatsapp}/>
                        <h6> Whatsapp</h6>
                    </div>
                    <div class="ws1"> 
                        <img src={telefono}/>
                        <h6> Llámanos</h6>
                    </div>
                    <div class="ws1"> 
                        <img src={mailsend}/>
                        <h6> Correo</h6>
                    </div>
                </div>
                

            </div>
            </div>
        </div>

    )
}
export default FooterPerso;