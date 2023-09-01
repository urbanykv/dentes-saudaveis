import React from "react";
import { Link } from "react-router-dom";
import './header.css'
import Home from "../../pags/Home/script";


function Header(){
    const title = document.querySelector('title')
    return(
        <header>
            <div className='logo'>
                <img src={process.env.PUBLIC_URL + '/assets/dente.png'}/>
                <h1>Dentes Saudáveis</h1>
            </div>
            <nav>
                <Link to='/'>Home</Link>
                <Link to='/contatos'>Contato</Link>
            </nav>
        </header>
    )
}

export default Header