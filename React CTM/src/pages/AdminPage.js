import React, {useState,useEffect} from "react";
import { TablaUsuario,Headermain } from "../components";

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

const AdminPage = () =>{


/*  
    //Esto Hook de efecto te permite llevar a cabo efectos secundarios en componentes funcionales:
    //En este caso actualiza la tabla mientras estamos en el navegador
    useEffect(()=>{
    getUsers();
    },[])
    
*/
    //Trae todos los usuarios de la base de Usuarios
    //Esta funcion se llama igual a como esta en la conexion de las APIs
/*     
    const getUsers = async()=>{
    const usuarioBD = await getAllUsers();
    setState(usuarioBD);
  } 

  */




    const [user, setUser] = useState(usuario1);
    return(
        <div>
        <Headermain/>
        <TablaUsuario usuarios={user}/>
        </div>
    )
}

export default AdminPage;