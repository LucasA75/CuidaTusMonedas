import React, {useState} from "react";
import { TablaUsuario } from "../components";

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
    const [user, setUser] = useState(usuario1);
    return(

        <div><TablaUsuario usuarios={user}/></div>
    )
}

export default AdminPage;