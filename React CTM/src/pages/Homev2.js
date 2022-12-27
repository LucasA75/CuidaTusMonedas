import React from 'react'
import { FooterMain, Headermain, MainV2, MenuModulosV2, MisionVisionV2 } from '../components'
/* Instale 2 dependecias para las animaciones , animate.css y react-on-screen */


const Homev2 = () => {
  return (
    <div>
    <Headermain/>
    <MainV2/> 
    <MenuModulosV2/>
    <MisionVisionV2/>
    <FooterMain/>
    </div>
  )
}

export default Homev2