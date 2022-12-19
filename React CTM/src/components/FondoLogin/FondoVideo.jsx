import React from 'react'
import videoBG from "../../assets/video/FondoMono.mp4"
import "./FondoLogin.css"


/* rafce para hacer una arrow function de inmediato */
const FondoVideo = () => {
  return (
    <div className='MainVideo'>
        <video src={videoBG} autoPlay loop muted />
    </div>
  )
}

export default FondoVideo