import axios from "axios";

import { url } from "./Config";

const guardarUsuario = async (usuario) => {
  //Esta constante recibe la respuesta de la api
  //url + "/user" = http://localhost8080/user

  //Eventualmente usuario sera igual a
  /*     {
        "name":"Mclufy",
        "lastName":"Laura",
        "correo":"fiz.sah@generation.org"
    } */

  const res = await axios.post(url + "/Usuario/save", usuario);
  console.log(res);
  return res.data;
};

const encontrarUsuario = async (id) => {
  //url+"/user/"+id = http://localhost:8080/user/1
  const res = await axios.get(url + "/UsuarioEncontrar/" + id);
  console.log(res);
  return res.data;
};

const editarUsuario = async (usuario) => {
  const res = await axios.put(url + "/Usuario/update", usuario);
  console.log(res);
  return res.data;
};

const eliminarUsuario = async (id) => {
  const res = await axios.delete(url + "/Usuario/" + id);
  console.log(res);
  return res.data;
};

const todosUsuarios= async()=>{
    const res = await axios.get(url+"/findAll");
    console.log(res)
    return res.data;
}

export { guardarUsuario, encontrarUsuario, editarUsuario, eliminarUsuario, todosUsuarios};