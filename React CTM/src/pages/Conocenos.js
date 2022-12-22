import React from "react";
import {Headermain,Equipo, FooterMain,MisionVision} from "../components";
import "../components/Equipo/Equipo.css"

const Conocenos = () => {
    return(
        <><Headermain></Headermain>
        <div>
            <Equipo></Equipo>
            <MisionVision/>
            <FooterMain></FooterMain>
        
        </div></>
        
    )
}

export default Conocenos;