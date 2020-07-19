import React from 'react'
import { connect } from 'react-redux'
import Navbar from './components/navbar'
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
    componentDidMount () {
        this.getLocation()
    }

    getLocation = () => {
        // console.log('get location')
        if (!navigator.geolocation) {
            console.log('navigation doesn\'t supported')
        } else {
            navigator.geolocation.getCurrentPosition(position => {
                // console.log(position)
                const { latitude, longitude } = position.coords
                this.props.getWeather(`lat=${latitude}&lon=${longitude}`)
            })
        }
    }

    render () {
        const styles = {
            backgroundImage : `url(${setBackground()})`,
        }

        return (
            <div className='main-container' style={styles}>
                <Navbar/>
            </div>
        )
    }
}

const mapStore = (state) => ({
    weather : state.data
})

export default connect(mapStore, { getWeather })(Main)