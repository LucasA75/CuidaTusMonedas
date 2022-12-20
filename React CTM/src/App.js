import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {AdminPage, IniciarSesion, Registrarse,Encuesta1,Encuesta2,Conocenos, Encuesta3, Encuesta4, ModuloP, IndexFraudesPiramidales} from "./pages";
import ConfirmacionRegistro from "./pages/ConfirmacionRegistro";
import Home from "./pages/Home"
import OrigenEstafasPage from "./pages/OrigenEstafasPage";
import PagePerso from "./pages/PagePerso";

const App =() => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}></Route>
                <Route path="/Registrarse" element={<Registrarse/>}></Route>
                <Route path="/Admin" element={<AdminPage/>}></Route>
                <Route path="/IniciarSesion" element={<IniciarSesion/>}></Route>
                <Route path="/Encuesta1" element={<Encuesta1/>}></Route>
                <Route path="/Encuesta2" element={<Encuesta2/>}></Route>
                <Route path="/Encuesta3" element={<Encuesta3/>}></Route>
                <Route path="/Encuesta4" element={<Encuesta4/>}></Route>   
                <Route path="/Perso" element={<PagePerso/>}></Route>
                <Route path="/Conocenos" element={<Conocenos/>}></Route>
                <Route path="/ModuloP" element={<ModuloP/>}></Route>
                <Route path="/InPira" element={<IndexFraudesPiramidales/>}></Route>
                <Route path="/OrigenEstafas" element={<OrigenEstafasPage/>}></Route>
                <Route path="/ConfirmacionRegistro" element={<ConfirmacionRegistro/>}></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App;