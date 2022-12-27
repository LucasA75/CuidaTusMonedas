import React, { useCallback } from 'react'
import { useNavigate } from "react-router-dom";
import "./MenuModuloV2.css"
import moneda1 from '../../assets/moneda1.png';
import moneda2 from '../../assets/moneda2.png';
import moneda3 from '../../assets/moneda3.png';
import { ArrowForwardIos } from '@mui/icons-material';
import 'animate.css';
import TrackVisibility from 'react-on-screen';




const RecuadrosM = () => {

    const navigate = useNavigate();
    const handleOnClick = useCallback(
        () => navigate("/Invierte", {}, [navigate]))
    const handleOnClick2 = useCallback(
        () => navigate("/ModuloP", {}, [navigate]))

    return (
        <div class="TodosLosRecuadrosM">
            <TrackVisibility>
                {({ isVisible }) =>
                    <div className={isVisible ? "animate__animated animate__backInLeft" : ""}>
                        <div class="container-lg recuadroM1">
                            <div class="row">
                                <div class="col-3 FotoGato1">
                                    <img src={moneda1} class="moneda1" alt="moneda1" />
                                </div>
                                <div class="col ContenidoM1">
                                    <h3>Administra tus monedas</h3>
                                    <p>En este modulo aprenderas sobre administracion de finanzas personales, sobre el ahorro y sobre las tarjetas de credito y otros temas relacionados</p>
                                    <button className='BotonComenzar1'>Comenzar &nbsp; <ArrowForwardIos className='ArrowM1' fontSize='small' /></button>
                                </div>
                            </div>
                        </div>
                    </div>}
            </TrackVisibility>
            <TrackVisibility>
                {({ isVisible }) =>
                    <div className={isVisible ? "animate__animated animate__backInRight" : ""}>
                        <div class="container recuadroM2">
                            <div class="row">
                                <div class="col-3 FotoGato1">
                                    <img src={moneda2} class="moneda1" alt="moneda1" />
                                </div>
                                <div class="col ContenidoM1">
                                    <h3>Protege tus monedas</h3>
                                    <p>En este modulo aprenderas sobre como proteger tu dinero de distintas estafas, ciber-ataques y tener buenos metodos de seguridad</p>
                                    <button className='BotonComenzar1' onClick={() => {
                                        handleOnClick2();
                                    }}>Comenzar &nbsp; <ArrowForwardIos className='ArrowM1' fontSize='small' /></button>
                                </div>
                            </div>
                        </div>
                    </div>}
            </TrackVisibility>
            <TrackVisibility>
                {({ isVisible }) =>
                    <div className={isVisible ? "animate__animated animate__backInLeft" : ""}>
                        <div class="container recuadroM3">
                            <div class="row">
                                <div class="col-3 FotoGato1">
                                    <img src={moneda3} class="moneda1" alt="moneda1" />
                                </div>
                                <div class="col ContenidoM1">
                                    <h3>Invierte tus monedas</h3>
                                    <p>En este modulo aprenderas sobre como invertir tu dinero para que pueda crecer con el tiempo y los diferentes tipos de herramientas que hay para invertir </p>
                                    <button className='BotonComenzar1' onClick={() => {
                                        handleOnClick();
                                    }}>Comenzar &nbsp; <ArrowForwardIos className='ArrowM1' fontSize='small' /></button>
                                </div>
                            </div>
                        </div>
                    </div>}
            </TrackVisibility>
        </div>

    )
}

export default RecuadrosM