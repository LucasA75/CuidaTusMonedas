import React from 'react'
import "./Perfil.css"

const Perfil = () => {
    return (
        <div class="container-xl">
        <div class="row">
            <div class='col-2 MenuLateralPerfil'>
                <ul>
                <li type="disc">Informacion de Perfil </li>
                <li type="disc">Configuracion</li>
                <li type="disc">Temas</li>
                </ul>
            </div>
            <aside class="col-10 MenuDerechoPerfil">
                <div className='PerfilHeader'>
                    <h1>Mi Perfil</h1>
                    <h4>Informacion de Contacto</h4>
                </div>
                <div>
                <form class="row g-3 needs-validation " novalidate>
                    <div class="col-md-4">
                        <label for="validationCustom01" class="form-label">Nombre</label>
                        <input type="text" class="form-control" id="validationCustom01" required/>
                            <div class="valid-feedback">
                                Looks good!
                            </div>
                    </div>
                    <div class="col-md-4">
                        <label for="validationCustom02" class="form-label">Apellido</label>
                        <input type="text" class="form-control" id="validationCustom02" required/>
                            <div class="valid-feedback">
                                Looks good!
                            </div>
                    </div>
                    <div class="col-md-4">
                        <label for="validationCustomUsername" class="form-label">Año Nacimiento</label>
                        <div class="input-group has-validation">
                            <input type="number" class="form-control" id="validationAno" aria-describedby="inputGroupPrepend" required/>
                                <div class="invalid-feedback">
                                    Please choose a username.
                                </div>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <label for="validationCustom03" class="form-label">Correo</label>
                        <input type="text" class="form-control" id="validationCustom03" required/>
                            <div class="invalid-feedback">
                                Please provide a valid city.
                            </div>
                    </div>
                    <div class="col-md-3">
                        <label for="validationCustom04" class="form-label">Telefono</label>
                        <div class="input-group has-validation">
                            <input type="number" class="form-control" id="validationTelefono" aria-describedby="inputGroupPrepend" required/>
                                <div class="invalid-feedback">
                                    Please choose a username.
                                </div>
                        </div>
                    </div>
                    <div class="col-12">
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="invalidCheck" required/>
                                <label class="form-check-label" for="invalidCheck">
                                    Aceptar terminos y condiciones.
                                </label>
                                <div class="invalid-feedback">
                                    You must agree before submitting.
                                </div>
                        </div>
                    </div>
                    <div class="col-12">
                        <button class="btn btn-primary" type="submit">Editar Informacion</button>
                    </div>
                </form>
                </div>
            </aside>
            
        </div>
        </div>
    )
}

export default Perfil