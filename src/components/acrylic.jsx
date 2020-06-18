import React from 'react'
import '../styles/acrylic.scss'

function Acrylic (props) {
    return (
        <div className='acrylic'>
            {props.children}
        </div>
    )
}

export default Acrylic