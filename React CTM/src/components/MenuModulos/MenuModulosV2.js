import React from 'react'
import "./MenuModuloV2.css"
import RecuadrosM from './RecuadrosM';
import 'animate.css';

const MenuModulosV2 = () => {
    return (
        <div>
            <div class="container-lg">
                <div className="Titulo">
                    <center>
                        <h2 className="animate__animated animate__bounce">Simplificamos el conocimiento financiero</h2>
                    </center>
                </div>
                <br></br>
                <div className="SubtituloM">
                    <center>
                        <h5>Dividimos los temas más importantes en tres módulos para que puedas aprender de manera sencilla.</h5>
                    </center>
                </div>
            </div>
            <RecuadrosM/>

        </div>
    )
}

export default MenuModulosV2