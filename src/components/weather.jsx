import React from 'react'
import { connect } from 'react-redux'
import { Button } from '@material-ui/core'

// icons
import MyLocationIcon from '@material-ui/icons/MyLocation'

import { URL_ICON } from '../helpers'
import '../styles/weather.scss'

const FtoC = temp => (temp - 32) * (5 / 9)
const CtoF = temp => (temp * ( 4 / 5 )) + 32

class Weather extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            temp : '',
            active : 0
        }
    }

    render () {
        const { weather, main, location } = this.props
        const { temp } = this.state

        return (
            <div className="weather">
                <div className="temp-icon">
                    <img src={URL_ICON + (weather && weather.icon) + '@4x.png'} alt="weather-icon"/>
                    <div className="temp">
                        <div className="location">
                            <MyLocationIcon fontSize="small"/>
                            <h3>{location}</h3>
                        </div>
                        <h1>{temp ? temp : `${main && main.temp} F`}</h1>
                        <div id="button-container">
                            <Button id="button">C</Button>
                            <Button id="button">F</Button>
                        </div>
                    </div>
                </div>
                <h1>{weather && `${weather.main}, ${weather.description}`}.</h1>
            </div>
        )
    }
}

const mapStore = (state) => ({
    weather : state.weather,
    main : state.main,
    location : state.name
})

export default connect(mapStore)(Weather)