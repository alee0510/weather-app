import React from 'react'
import { connect } from 'react-redux'

// components
import Navbar from './components/navbar'
import Weather from './components/weather'
import MiniCard from './components/mincard'

// others
import { morning, day, afternoon, night } from './assets'
import { getWeather } from './actions'

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
    constructor (props) {
        super (props) 
        this.state = {
            styles : {}
        }
    }

    componentDidMount () {
        this.getLocation()
        this.setState({ styles : { backgroundImage : `url(${setBackground()})` }})
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
        return (
            <div className="main-container" style={this.state.styles}>
                <Navbar/>
                <Weather/>
                <MiniCard/>
                {/* <Weather/>
                <MiniCard/>
                <div className="daily-forecast"></div> */}
            </div>
        )
    }
}

export default connect(null, { getWeather })(Main)