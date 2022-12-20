import React from 'react'
import { Headermain, HeaderPerso, Perfil } from '../components'

const PerfilPage = () => {
  return (
    <>
    <Headermain/> {/* El HeaderPersonal hay que separar el header del contenido ... */}
    <Perfil/>
    </>
  )
}

export default PerfilPage