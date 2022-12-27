import React from 'react'
import Fondo1 from "../../assets/50F.png"
import Fondo2 from "../../assets/F51.png"
import "../MisionVision/MisionVision.css"

const MisionVisionV2 = () => {
    return (
        <div className='container'>
            <div id="carouselExampleInterval" class="carousel carousel-dark slide" data-bs-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active Fondo1C" data-bs-interval="5000">
                        <img src={Fondo1} class="d-block w-100" alt="..." />
                        <div class="carousel-caption d-none d-md-block RecuadrosMV">
                            <h2>Nuestra Mision</h2>
                            <p>Nuestra Misión es dar las herramientas y conocimientos necesarios a través de una plataforma web para que los jóvenes tomen control total de sus finanzas personales y como utilizar el dinero de manera inteligente.</p>
                        </div>
                    </div>
                    <div class="carousel-item Fondo2C " data-bs-interval="10000">
                        <img src={Fondo2} class="d-block w-100" alt="..." />
                        <div class="carousel-caption d-none d-md-block RecuadrosMV2">
                            <h2>Nuestra Vision</h2>
                            <p>Que jóvenes adquieran los conocimientos necesarios para tomar control sobre su futuro financiero.</p>
                        </div>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        </div>

    )
}

export default MisionVisionV2