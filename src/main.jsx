import React from 'react'
import { connect } from 'react-redux'

import Navbar from './components/navbar'

import { morning, day, afternoon, night } from './assets'
import { getWeather } from './actions'

import { URL_ICON } from './helpers'

// import style
import './styles/main.scss'

const setBackground = () => {
    const time = new Date().getHours() // 24 hours
    if (time >= 0 && time <= 6) {
        return morning
    } else if (time > 6 && time <= 12 ) {
        return day
    } else if (time >= 15 && time <= 18) {
        return afternoon
    } else {
        return night
    }
}

class Main extends React.Component {
    componentDidMount () {
        this.getLocation()
    }

    getLocation = () => {
        if (!navigator.geolocation) {
            console.log('navigation doesn\'t supported')
        } else {
            navigator.geolocation.getCurrentPosition(position => {
                const { latitude, longitude } = position.coords
                this.props.getWeather(`lat=${latitude}&lon=${longitude}`)
            })
        }
    }

    render () {
        const styles = {
            backgroundImage : `url(${setBackground()})`,
        }

        const { weather, main, name } = this.props

        return (
            <div className="main-container" style={styles}>
                <Navbar/>
                <div className="main-info">
                    <img src={URL_ICON+`${weather && weather.icon}`+'@4x.png'}/>
                    <h1>{main && main.temp} F</h1>
                    <h1>{weather && `${weather.main}, ${weather.description}`}</h1>
                    <h3>Location : {name}</h3>
                </div>
            </div>
        )
    }
}

const mapStore = (state) => ({
    weather : state.weather,
    main : state.main,
    name : state.name
})

export default connect(mapStore, { getWeather })(Main)