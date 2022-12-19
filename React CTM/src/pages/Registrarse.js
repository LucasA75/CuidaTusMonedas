import React, {useState} from "react";
import {FormularioRegistrarse, FondoLogin, Rectangulo} from "../components";

const usuario1 = [];

const Registrarse = () => {


  const [user, setUser] = useState(usuario1);
  const userAdd = (usuario) => {
    const addUsuario = [
      //Mantenme los datos que tengo en user y agregame lo que yo te entrego aqui (usuario)
      ...user,
      usuario,
    ];
    //Luego actualizamos (o setteamos) el state
    setUser(addUsuario);
  };


  return(

      <main>
      <FondoLogin/>
      <Rectangulo/>
      <div><FormularioRegistrarse userAdd = {userAdd}/></div>
      </main>
     
  )
}

export default Registrarse;