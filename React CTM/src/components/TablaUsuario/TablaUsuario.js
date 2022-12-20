import React from "react";

const TablaUsuario = ({usuarios}) => {
  return (
    <div class="card container mb-2">
      <h2>Tabla Usuarios</h2>
      <table class="table">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Contraseña</th>
            <th>Año de nacimiento</th>
            <th>Telefono</th>
          </tr>
        </thead>
        <tbody>
        {//Iteramos usuarios con .map, a cada elemento de usuarios lo llamaremos
         //usuario y realizaremos lo siguiente =>
        }
          {usuarios.map((usuario) => (
            <tr>
              <td>{usuario.nombre}</td>
              <td>{usuario.apellido}</td>
              <td>{usuario.password}</td>
              <td>{usuario.ano}</td>
              <td>{usuario.telefono}</td>
{/*               <td>
              <button
                  type="button"
                  class="btn btn-danger"
                  onClick={() => {
                    deleteUser(usuario.rut);
                  }}
                >
                 Eliminar
                </button>
                <button
                  type="button"
                  class="btn btn-warning"
                  onClick={() => {
                    setUsuarioEditado(usuario);
                  }}
                >
                 Editar
                </button>

              </td> */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TablaUsuario;
