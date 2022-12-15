import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import { AdminPage, LoginPage } from "./pages";
import Home from "./pages/Home"
import PagePerso from "./pages/PagePerso";

const App =() => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}></Route>
                <Route path="/Login" element={<LoginPage/>}></Route>
                <Route path="/Admin" element={<AdminPage/>}></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App;