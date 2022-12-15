import React, {useState} from "react";
import "./FormularioLogin.css";

const initialUsuario = {
  nombre: "",
  apellido: "",
  contraseña: "",
  confirmarContraseña: "",
  edad: "",
  telefono: "",
};

const FormularioLogin = ({userAdd}) => {
    const [usuario, setUsuario] = useState(initialUsuario);
    const { nombre, apellido, contraseña, confirmarContraseña, edad, telefono } = usuario;
    const handleInputChange = (e) => {
        //Esta funcion se llama cada vez que nosotros escribimos algo en algun input de nuestra pagina
        const changedFormValue = {
            //va a mantener los datos que tiene usuario
            ...usuario,
            //Esto mete el atributo que cambie por su nuevo valor
            [e.target.name]: e.target.value
        }
        setUsuario(changedFormValue);
    }


  return (
    <div>
      <div class="container-lg formulario">
        <h1>Hola LUCAS </h1>
        <div>
          <form>
            <label for="name"> Nombre : </label>
            <input
              type="text"
              name="nombre"
              id="name"
              value={nombre}
              onChange={handleInputChange}
            />
            <br />

            <label for="apellido"> Apellido : </label>
            <input
              type="text"
              name="apellido"
              id="apellido"
              value={apellido}
              onChange={handleInputChange}
            />
            <br />
            <label for="contraseña"> Contraseña : </label>
            <input
              type="text"
              name="contraseña"
              id="contraseña"
              value={contraseña}
              onChange={handleInputChange}
            />
            <br />
            <label for="confirmarContraseña"> Confirmar constraseña : </label>
            <input
              type="text"
              name="confirmarContraseña"
              id="confirmarContraseña"
              value={confirmarContraseña}
              onChange={handleInputChange}
            />
            <br />

            <label for="edad"> Edad : </label>
            <input
              type="text"
              name="edad"
              id="edad"
              value={edad}
              onChange={handleInputChange}
            />
            <br />

            <label for="telefono"> Telefono : </label>
            <input
              type="text"
              name="telefono"
              id="telefono"
              value={telefono}
              onChange={handleInputChange}
            />
            <br />
          </form>
          <br />
          <center>
            <button type="button" class="btn btn-warning" onClick={() => userAdd(usuario)}>
              Agregar usuario
            </button>
          </center>
        </div>
      </div>
    </div>
  );
};

export default FormularioLogin;
