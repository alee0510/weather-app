import React from 'react'
import Axios from 'axios'

import Navbar from './components/navbar'

// import assets & helper
import { morning, day, afternoon, night } from './assets'
import { URL, API } from './helpers'

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


// main class
class Main extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            data : [],
            coordinates : null
        }
    }
    componentDidMount () {
        this.getLocation()
    }

    getLocation = () => {
        console.log('get location')
        if (!navigator.geolocation) {
            console.log('navigation doesn\'t supported')
        } else {
            navigator.geolocation.getCurrentPosition(position => {
                console.log(position)
                // this.getWeatherData(position.coords)
            })
        }
    }

    getWeatherData = async (position = null) => {
        console.log('get data')
        const key = position ? `lat=${position.latitude}&lon=${position.longitude}` : 'q=Jakarta'
        try {
            const { data } = await Axios.get(URL + key + API)
            this.setState({ data : data, coordinates : position })
        } catch(error) {
            console.log(error)
        }
    }

    render () {
        const styles = {
            backgroundImage : `url(${setBackground()})`,
        }
        console.log(this.state.data)

        return (
            <div className='main-container' style={styles}>
                <Navbar/>
            </div>
        )
    }
}

export default Main