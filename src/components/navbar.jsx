import React from 'react'
import { weatherIcon } from '../assets'
import '../styles/navbar.scss'

class Navbar extends React.Component {
    render () {
        return (
            <div className='navbar-container'>
                <div id='brand'>
                    <div>
                        <img src={weatherIcon} alt='icon' width='100%'/>
                    </div>
                    <h1>Weather</h1>
                </div>
                <div id='media-social'>
                </div>
            </div>
        )
    }
}

export default Navbar