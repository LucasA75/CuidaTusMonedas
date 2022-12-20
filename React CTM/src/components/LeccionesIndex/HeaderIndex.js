import React from 'react'
import "./LeccionesIndex.css"
import piramide1 from '../../assets/piramide1.png'

const HeaderIndex = () => {
  return (
    <div className='HeaderIndex'>
        <div className='HeaderNombre'>
            <img src={piramide1} width="100"/>
            <h3>Fraudes Piramides</h3>
            <p>0%</p>
        </div>
        <div className='LeccionesTit'>
            <h3>Lecciones</h3>
        </div>
    </div>
  )
}

export default HeaderIndex;