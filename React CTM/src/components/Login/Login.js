import React from "react";
import "./Login.css"
import gatito from '../../assets/logo.png';

const Login = () => {


  return (
    <div className="divPrincipal">
      <div class="container-md login">
        <div >
          <div className="gato">
            <img src={gatito} alt="nuestro logo" />
          </div>
          <div className="tituloLogin">
            <h1>Bienvenido Nuevamente!</h1>
          </div>
          <div className="SubtituloLogin">
          <h2>Ingresa tu cuenta de usuario para iniciar sesion</h2>
          </div>
          <div className="Credenciales">
          <form>
            <label for="name" className="nombre"> Nombre : </label>
            <input
              type="text"
              name="nombre"
              id="name"
            />
            <br />
            <label for="contraseña" className="contraseña"> Contraseña : </label>
            <input
              type="password"
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
    </div>
  );

}

export default Login;