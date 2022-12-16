import React, { useState } from "react";
import "./FormularioLogin.css";
import gatito from "../../assets/logo.png";

const initialUsuario = {
  nombre: "",
  apellido: "",
  contraseña: "",
  confirmarContraseña: "",
  edad: "",
  telefono: "",
};

const FormularioLogin = ({ userAdd }) => {
  const [usuario, setUsuario] = useState(initialUsuario);
  const { nombre, apellido, contraseña, confirmarContraseña, edad, telefono } =
    usuario;
  const handleInputChange = (e) => {
    //Esta funcion se llama cada vez que nosotros escribimos algo en algun input de nuestra pagina
    const changedFormValue = {
      //va a mantener los datos que tiene usuario
      ...usuario,
      //Esto mete el atributo que cambie por su nuevo valor
      [e.target.name]: e.target.value,
    };
    setUsuario(changedFormValue);
  };

  return (
    <div>
      <div></div>
      <div class="container-lg formulario">
        <div class="gato2">
          <img src={gatito} alt="nuestro logo" width={"250px"} />
        </div>
        <h1 class="txtUsuario">Crea tu usuario</h1>
        <div>
          <form>
            <label class="name1" for="name">
              {" "}
              Nombre{" "}
            </label>
            <input
              class="cuadro1"
              type="text"
              name="nombre"
              id="name"
              value={nombre}
              onChange={handleInputChange}
            />
            <br />

            <label class="name2" for="apellido">
              Apellido
            </label>
            <input
              class="cuadro2"
              type="text"
              name="apellido"
              id="apellido"
              value={apellido}
              onChange={handleInputChange}
            />
            <br />
            <label class="name3" for="contraseña">
              {" "}
              Contraseña :{" "}
            </label>
            <input
              class="cuadro3"
              type="text"
              name="contraseña"
              id="contraseña"
              value={contraseña}
              onChange={handleInputChange}
            />
            <br />
            <label class="name4" for="confirmarContraseña">
              {" "}
              Confirmar constraseña{" "}
            </label>
            <input
              class="cuadro4"
              type="text"
              name="confirmarContraseña"
              id="confirmarContraseña"
              value={confirmarContraseña}
              onChange={handleInputChange}
            />
            <br />

            <label class="name5" for="edad">
              {" "}
              Edad{" "}
            </label>
            <input
              class="cuadro5"
              type="text"
              name="edad"
              id="edad"
              value={edad}
              onChange={handleInputChange}
            />
            <br />

            <label class="name6" for="telefono">
              {" "}
              Telefono{" "}
            </label>
            <input
              class="cuadro6"
              type="text"
              name="telefono"
              id="telefono"
              value={telefono}
              onChange={handleInputChange}
            />
            <br />
          </form>
          <br />
          <center class="botonConfirmar1">
            <button
              type="button"
              class="btn btn-warning btn-lg"
              onClick={() => userAdd(usuario)}
            >
              Confirmar
            </button>
          </center>
        </div>
      </div>
    </div>
  );
};

export default FormularioLogin;
