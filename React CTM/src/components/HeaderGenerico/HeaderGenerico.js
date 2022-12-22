import React from 'react'
import logo from '../../assets/logo.png'
import gatopage from '../../assets/gatopage.png'

const HeaderGenerico = () => {
  return (
    <div>
         <nav class="navbar navbar-expand-lg bg-light" >
            <div class="container-fluid">
                <a class="navbar-brand" href="/#">
                    {/* <img src={logo} alt="Logo" width="150" height="150" class="d-inline-block align-text-top logo" /> */}
                    <img src={logo} width="150" class="logo1"/>
                </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse d-flex flex-row-reverse" id="navbarNavAltMarkup">
                    <div class="navbar-nav">
                        <a class="nav-link active p-2" aria-current="page" href="/#">Home</a>
                        <a class="nav-link p-2" href="/#">Conócenos</a>
                        <a class="nav-link p-2" href="/#">Ayuda</a>
                        <a class="nav-link p-2" href="/Perfil">Perfil</a>
                        <img src={gatopage} alt="Logo" width="100" height="100" class="d-inline-block align-text-top logo" />

                    </div>
                </div>
            </div>
        </nav>
    </div>
  )
}

export default HeaderGenerico;