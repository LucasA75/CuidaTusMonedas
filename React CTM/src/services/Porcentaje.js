import axios from "axios";

const guardarPorcentaje = async ()=> {

    const res = await axios.post(url + "/Porcentaje/save", leccion, usuario);
    console.log(res);
    return res.data;

    return guardarPorcentaje;
}