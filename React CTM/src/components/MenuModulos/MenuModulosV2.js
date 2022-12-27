import React from 'react'
import "./MenuModuloV2.css"
import RecuadrosM from './RecuadrosM';

const MenuModulosV2 = () => {
    return (
        <div>
            <div class="container-lg">
                <div className="Titulo">
                    <center>
                        <h2>Simplificamos el conocimiento financiero</h2>
                    </center>
                </div>
                <br></br>
                <div className="SubtituloM">
                    <center>
                        <h5>Dividimos los temas mas importantes en tres modulos, para que puedas aprender de manera focalizada y lo que te guste</h5>
                    </center>
                </div>
            </div>
            <RecuadrosM/>

        </div>
    )
}

export default MenuModulosV2