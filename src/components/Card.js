import React from 'react'
import './Card.css'

const Card = props => (
    <div className="CardStack">
    <div className="CardImg">
        <img src={props.image} />
    </div>
    <div className="CardInfo">
        <h3>{props.title}</h3>
        <p>{props.text}</p>
     </div>
     </div>
)

export default Card