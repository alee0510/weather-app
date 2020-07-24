import React from 'react'
import '../styles/button.scss'

export default function (props) {
    return (
        <button 
            type="button" 
            onClick={props.onClick}
            className="acrylic-button"
        >
            {props.name}
        </button>
    )
}