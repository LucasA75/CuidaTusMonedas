import React, {useState} from "react";
import {FormularioLogin, FondoLogin, Rectangulo} from "../components";

const usuario1 = [
  {
    nombre: "Joseph",
    apellido: "Joestar",
    contraseña: "jejejaja",
    confirmarContraseña: "jejejaja",
    edad:"150",
    telefono:"964869451"
  },
  {
    nombre: "Diego",
    apellido: "Brown",
    contraseña: "1234",
    confirmarContraseña: "1234",
    edad:"15",
    telefono:"96489451"
  },
  {
    nombre: "Lucas",
    apellido: "Jackson",
    contraseña: "admin",
    confirmarContraseña: "admin",
    edad:"23",
    telefono:"964834123"
  },
];



const LoginPage = () => {


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
      <div><FormularioLogin userAdd = {userAdd}/></div>
      </main>
     
  )
}

export default LoginPage;