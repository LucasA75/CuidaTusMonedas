import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import { AdminPage, LoginPage, Conocenos } from "./pages";
import Home from "./pages/Home"

const App =() => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}></Route>
                <Route path="/Login" element={<LoginPage/>}></Route>
                <Route path="/Admin" element={<AdminPage/>}></Route>
                <Route path="/Conocenos" element={<Conocenos/>}></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App;