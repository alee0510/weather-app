import React from 'react'
import Axios from 'axios'

// custom components
import Acrylic from './components/acrylic'

// import assets
import { morning, day, afternoon, night } from './assets'

// API
const URL = 'https://api.openweathermap.org/data/2.5/weather?'
const API = '&appid=fd2395620d3afcb1f6d8ac8b16d8b34a'

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

    setBackground = () => {
        console.log('set background')
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
        let key = position ? `lat=${position.latitude}&lon=${position.longitude}` : 'q=Jakarta'
        try {
            const { data } = await Axios.get(URL + key + API)
            this.setState({ data : data, coordinates : position })
        } catch(error) {
            console.log(error)
        }
    }

    render () {
        const containerStyle = {
            backgroundImage : `url(${this.setBackground()})`,
            backgroundRepeat : 'no-repeat',
            backgroundSize : 'cover',
            height : '100vh',
            width : '100vw',
            display : 'flex',
            justifyContent : 'center',
            alignItems :'center'
        }
        console.log(this.state.data)

        return (
            <div style={containerStyle}>
               <Acrylic>
                   <h1>Hello</h1>
               </Acrylic>
            </div>
        )
    }
}

export default Main