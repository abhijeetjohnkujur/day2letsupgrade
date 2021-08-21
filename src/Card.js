import React from 'react'
import './css/card.css'
const Card = (props) => {
    return (
        
        
        <div className="card-container">
            <h1 className="title">{props.title}</h1>
            <h3 className="subtitle">{props.subtitle}</h3>
            <div className="card-image"><img src={props.image} alt="Course"></img></div>
            <h4 className="desc">{props.desc}</h4>
        </div>
    )
}

export default Card
