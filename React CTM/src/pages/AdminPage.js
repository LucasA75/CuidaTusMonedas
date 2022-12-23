import React, {useState,useEffect} from "react";
import { TablaUsuario,Headermain } from "../components";

import { eliminarUsuario, todosUsuarios } from "../services/User";

const usuario1 = [

    {
      id: 1,
      nombre: "Joseph",
      apellido: "Joestar",
      contraseña: "jejejaja",
      confirmarContraseña: "jejejaja",
      edad:"150",
      telefono:"964869451"
    },
    {
      id: 2,
      nombre: "Diego",
      apellido: "Brown",
      contraseña: "1234",
      confirmarContraseña: "1234",
      edad:"15",
      telefono:"96489451"
    },
    {
      id: 3,
      nombre: "Lucas",
      apellido: "Jackson",
      contraseña: "admin",
      confirmarContraseña: "admin",
      edad:"23",
      telefono:"964834123"
    },  {
      id: 4,
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

  const eliminaUser = async(idUsuario)=>{
    const usuarioBD = await eliminarUsuario(idUsuario);
    todoslosUsuarios();
  }

    return(
        <div>
        <Headermain/>
        <TablaUsuario usuarios={state} eliminarUsuario={eliminaUser}/>
        </div>
    )
    
}

export default AdminPage;