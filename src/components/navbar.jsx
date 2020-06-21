import React from 'react'
import { weatherIcon, gitHub } from '../assets'
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
                    <ul>
                        <li><img src={gitHub} alt='git'/></li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Navbar