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
        () => navigate("/ModuloI", {}, [navigate]))
    const handleOnClick2 = useCallback(
        () => navigate("/ModuloP", {}, [navigate]))
        const handleOnClick3 = useCallback(
            () => navigate("/ModuloA", {}, [navigate]))


    return (
        <div class="TodosLosRecuadrosM">
        {/* Esto ve lo que esta mostrandose en pantalla y lo muestra cuando es visible */}
        {/* once = solo una vez */}
        {/* offset={el campo de vision} */}
            <TrackVisibility once offset={300}>
                {({ isVisible }) =>
                    <div className={isVisible ? "animate__animated animate__backInLeft" : ""}>
                        <div class="container-lg recuadroM1">
                            <div class="row">
                                <div class="col-3 FotoGato1">
                                    <img src={moneda1} class="moneda1" alt="moneda1" />
                                </div>
                                <div class="col ContenidoM1">
                                    <h3>Administra tus monedas</h3>
                                    <p>En este módulo aprenderás sobre administración de finanzas personales, ahorro, tarjetas de crédito y otros temas relacionados</p>
                                    <button className='BotonComenzar1' onClick={() => {
                                        handleOnClick3();
                                        }}>Comenzar &nbsp; <ArrowForwardIos className='ArrowM1' fontSize='small' /></button>
                                </div>
                            </div>
                        </div>
                    </div>}
            </TrackVisibility>
            <TrackVisibility once offset={300}>
                {({ isVisible }) =>
                    <div className={isVisible ? "animate__animated animate__backInRight" : ""}>
                        <div class="container recuadroM2">
                            <div class="row">
                                <div class="col-3 FotoGato1">
                                    <img src={moneda2} class="moneda1" alt="moneda1" />
                                </div>
                                <div class="col ContenidoM1">
                                    <h3>Protege tus monedas</h3>
                                    <p>En este módulo aprenderás sobre cómo proteger tu dinero de distintas estafas, ciber-ataques y tener buenos métodos de seguridad</p>
                                    <button className='BotonComenzar1' onClick={() => {
                                        handleOnClick2();
                                    }}>Comenzar &nbsp; <ArrowForwardIos className='ArrowM1' fontSize='small' /></button>
                                </div>
                            </div>
                        </div>
                    </div>}
            </TrackVisibility>
            <TrackVisibility once offset={300}>
                {({ isVisible }) =>
                    <div className={isVisible ? "animate__animated animate__backInLeft" : ""}>
                        <div class="container recuadroM3">
                            <div class="row">
                                <div class="col-3 FotoGato1">
                                    <img src={moneda3} class="moneda1" alt="moneda1" />
                                </div>
                                <div class="col ContenidoM1">
                                    <h3>Invierte tus monedas</h3>
                                    <p>En este módulo aprenderás sobre cómo invertir tu dinero para que pueda crecer con el tiempo y los diferentes tipos de herramientas que hay disponibles </p>
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