import React, {useState,useEffect} from "react";
import { TablaUsuario,Headermain } from "../components";

import { todosUsuarios } from "../services/User";

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
    },  {
      nombre: "asdasd",
      apellido: "Papa",
      contraseña: "admin",
      confirmarContraseña: "papa",
      edad:"23",
      telefono:"964834123"
    }
  ];

const AdminPage = () =>{

    const [state, setUser] = useState(usuario1);
    //Esto Hook de efecto te permite llevar a cabo efectos secundarios en componentes funcionales:
    //En este caso actualiza la tabla mientras estamos en el navegador
    useEffect(()=>{
    todoslosUsuarios();
    },[])

    //Trae todos los usuarios de la base de Usuarios
    //Esta funcion se llama igual a como esta en la conexion de las APIs

    const todoslosUsuarios = async()=>{
    const usuarioBD = await todosUsuarios();
    setUser(usuarioBD);
  } 

    return(
        <div>
        <Headermain/>
        <TablaUsuario usuarios={state}/>
        </div>
    )
    
}

export default AdminPage;