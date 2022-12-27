import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {AdminPage, 
    IniciarSesion,
     Registrarse,
     Encuesta1,
     Encuesta2,
     Conocenos, 
     Encuesta3, 
     Encuesta4, 
     ModuloP, 
     IndexFraudesPiramidales,
    PerfilPage,
    EsquemaPiramidalPage,
    Homev2
    } from "./pages";
import CasosFamososPage from "./pages/CasosFamososPage";
import ConfirmacionRegistro from "./pages/ConfirmacionRegistro";
import EsquemaPonziPage from "./pages/EsquemaPonziPage";
import EvitarEstafaPage from "./pages/EvitarEstafaPage";
import Home from "./pages/Home"
import IdentificaEstafaPage from "./pages/IdentificaEstafaPage";
import OrigenEstafasPage from "./pages/OrigenEstafasPage";
import PagePerso from "./pages/PagePerso";
import ProfundizaEstafaPage from "./pages/ProfundizaEstafaPage";
import PruebaModuloPPage from "./pages/PruebaModuloPPage";

const App =() => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Homev2/>}></Route>
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
                <Route path="/Perfil" element={<PerfilPage/>}></Route>
                <Route path="/EsquemaPiramidal" element={<EsquemaPiramidalPage/>}></Route>
                <Route path="/EsquemaPonzi" element={<EsquemaPonziPage/>}></Route>
                <Route path="/IdentificaEstafa" element={<IdentificaEstafaPage/>}></Route>
                <Route path="/CasosFamosos" element={<CasosFamososPage/>}></Route>
                <Route path="/EvitarEstafa" element={<EvitarEstafaPage/>}></Route>
                <Route path="/EvaluacionEstafa" element={<PruebaModuloPPage/>}></Route>
                <Route path="/ProfundizaEstafa" element={<ProfundizaEstafaPage/>}></Route>
                <Route path="/Home" element={<Home/>}></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App;