import React from "react";
import './card.css'

function Card(props){
    return(
        <div className="card">
            <h3>{props.titulo}</h3>
            <p>{props.texto}</p>
        </div>
    )
}

export default Card