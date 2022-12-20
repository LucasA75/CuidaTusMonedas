import React from "react";
import "./ModuloProtege.css";
import piramide1 from '../../assets/piramide1.png'
import telf2 from '../../assets/telf2.png'
import telfblock from '../../assets/telfblock.png'
import billetera from '../../assets/billetera.png'
import footerimg from '../../assets/footerimg.png'

const ModuloProtege = () => {

    return (

        <div >
            <div className="Encabezado">
                <h2 >Protege tus monedas</h2> <br/>
                
            </div>
            <div className="subti1">
                <p class="fw-light fs-4"> Cómo proteger el dinero</p>
            </div>
            <div className="temas1">
                <a id="link1" href="http://localhost:3000/InPira" style={{textDecoration:"none"}}> 
                <div class="container-lg temas">
                    <img src={piramide1} alt="Logo" width="130"/>
                    <h4 className="tituloProteje">Fraudes piramidales</h4>
                    <h4 className="Porcentaje"> 0 %</h4>
                </div >
                </a>

                <a id="link2" href="" style={{textDecoration:"none"}}>
                <div class="container-lg temas">
                    <img src={telf2} width="180" />
                    <h4 className="tituloProteje">Estafas</h4>
                    <h4 className="Porcentaje"> 0 %</h4>
                </div>
                </a>
                
                <a id="link3" href="" style={{textDecoration:"none"}}>
                <div class="container-lg temas">
                    <img src={telfblock} width="180"/>
                    <h4 className="tituloProteje">Cuida tus datos</h4>
                    <h4 className="Porcentaje"> 0 %</h4>
                </div>
                </a>

                <a id="link3" href="" style={{textDecoration:"none"}}>
                <div class="container-lg temas">
                    {/* <img src={telfblock} width="180"/> */}
                    <img></img>
                    <h4 className="tituloProteje">Próximamente...</h4>
                    <h4></h4>
                    {/* <h4 className="Porcentaje"> 0 %</h4> */}
                </div>
                </a>
                
            </div>
            
                <div class="container billetera">
                <img src={billetera} width="400"/> 
                </div>
             
            
        </div>
    )
}

export default ModuloProtege;