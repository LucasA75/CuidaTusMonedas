import React from "react";
import { Headermain,Main,MenuModulos,FooterMain,MisionVision, FraseMoti, LoginBoton, CerrarSesion, Profile } from "../components";


const Home =() =>{
    return(
        <>
        <Headermain />
        <Main />
        <MenuModulos />
        <MisionVision/>
        <FraseMoti/>
        <FooterMain />
        </>
    )
}
export default Home;