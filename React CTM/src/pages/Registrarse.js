import React, {useState} from "react";
import {FormularioRegistrarse, FondoLogin, Rectangulo} from "../components";
import { guardarUsuario, todosUsuarios } from "../services/User";

const usuario1 = [];

const Registrarse = () => {

  const userAdd = async(usuarioAgregado) =>{
    //En esta linea agregamos un usuario a la base de datos
    const usuarioBD = await guardarUsuario(usuarioAgregado);
    //Aqui haremos que la tabla se actualice
    todosUsuarios();
  }

/*   const [user, setUser] = useState(usuario1);
  const userAdd = (usuario) => {
    const addUsuario = [
      //Mantenme los datos que tengo en user y agregame lo que yo te entrego aqui (usuario)
      ...user,
      usuario,
    ];
    //Luego actualizamos (o setteamos) el state
    setUser(addUsuario);
  }; */

  return(

      <main>
      <FondoLogin/>
      <Rectangulo/>
      <div><FormularioRegistrarse userAdd = {userAdd}/></div>
      </main>
     
  )
}

export default Registrarse;