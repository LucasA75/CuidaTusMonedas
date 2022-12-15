import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import { AdminPage, IniciarSesion, LoginPage,Encuesta1,Encuesta2} from "./pages";
import Home from "./pages/Home"

const App =() => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}></Route>
                <Route path="/Login" element={<LoginPage/>}></Route>
                <Route path="/Admin" element={<AdminPage/>}></Route>
                <Route path="/IniciarSesion" element={<IniciarSesion/>}></Route>
                <Route path="/Encuesta1" element={<Encuesta1/>}></Route>
                <Route path="/Encuesta2" element={<Encuesta2/>}></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App;