import React from "react";
import "./Login.css" 
import gatito from '../../assets/logo.png';

const Login = () =>{


    return (
        <div className="divPrincipal">
          <div class="container-md login">
            <div>
            <div className="gato">
              <img src={gatito} alt="nuestro logo" />
            </div> 
            <div className="titulo">
            <h1>Iniciar Sesión</h1>
            </div>
            <form>
            <label for="name"> Nombre : </label>
            <input
              type="text"
              name="nombre"
              id="name"
            />
            <br />
            <label for="name"> Contraseña : </label>
            <input
              type="text"
              name="contraseña"
              id="contraseña"
            />
            </form>
            <h6>¿Olvidaste tu contraseña?</h6>

            <div>
            <button type="button" class="btn btn-primary">Iniciar Sesión</button>
            </div>
            <div>
              ¿No tienes una cuenta?  Regístrate
            </div>

            </div>

          </div>
        </div>
    );

}

export default Login;