import React from 'react'
import '../styles/acrylic.scss'

function Acrylic (props) {
    return (
        <div 
            className={`acrylic ${props.color} ${props.opacity} ${props.radius} ${props.shadow}`} 
            style={props.style}
        >
            {props.children}
        </div>
    )
}

export default Acrylic