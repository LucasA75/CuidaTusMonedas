import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import { Home,LoginPage } from "./pages";

const App =() => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}></Route>
                <Route path="/Login" element={<LoginPage/>}></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App;