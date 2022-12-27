import React from "react";
import {Headermain,Equipo, FooterMain,MisionVision, FondoVideo} from "../components";
import "../components/Equipo/Equipo.css"

const Conocenos = () => {
    return(
        <><Headermain></Headermain>
        <div>
            <FondoVideo/>
            <Equipo></Equipo>
            <FooterMain></FooterMain>
        </div></>
        
    )
}

export default Conocenos;