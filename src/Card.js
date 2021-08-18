import React from 'react'
import './css/card.css'
const Card = (props) => {
    return (
      
        <div className="card-container">
            <h1>{props.title}</h1>
            <h3>{props.subtitle}</h3>
            <div className="card-image">{props.image}</div>
            <h4>{props.desc}</h4>
        </div>
        
    )
}

export default Card
