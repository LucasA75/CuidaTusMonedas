import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./pages/Home"
import PagePerso from "./pages/PagePerso";

const App =() => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}></Route>
                <Route path="/Perso" element={<PagePerso/>}></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App;