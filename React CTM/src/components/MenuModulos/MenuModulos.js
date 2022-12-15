import React from "react";
import "./MenuModulos.css"
import moneda1 from '../../assets/moneda1.png';
import moneda2 from '../../assets/moneda2.png';
import moneda3 from '../../assets/moneda3.png';

const MenuModulos = () => {
    return (
        <div>
            <div>
                <center>
                <h2>Simplificamos la forma de aprender sobre finanzas</h2>
                </center>
            </div>
            <div>
                <center>
                <h5>Escoge el tema que más te llame la atención</h5>
                </center>
            </div>
        


        <div class="card-group">
            <div class="card">
                <img src={moneda1} class="card-img-top" alt="moneda1" />
                <div class="card-body">
                <center>
                    <h5 class="card-title">Administra tus Monedas</h5>
                    </center>
                </div>
            </div>
            <div class="card">
                <img src={moneda2} class="card-img-top" alt="moneda2" />
                <div class="card-body">
                <center>
                    <h5 class="card-title">Protege tus Monedas</h5>
                    </center>
                </div>
            </div>
            <div class="card">
                <center>
                <img src={moneda3} class="card-img img3" alt="moneda3" />
                </center>
                <div class="card-body">
                <center>
                    <h5 class="card-title">Invierte tus Monedas</h5>
                </center>
                </div>
            </div>
        </div>
        </div>

    )
}
export default MenuModulos;