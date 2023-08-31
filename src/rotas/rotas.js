import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pags/Home/script";
import Contatos from "../pags/Contatos/script";

function Rotas(){
    const title = document.querySelector('title')
    return(
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<Home/>}/>
                <Route path="/contatos" element={<Contatos/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Rotas