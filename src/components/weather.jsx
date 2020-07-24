import React from 'react'
import { connect } from 'react-redux'
import { Button } from '@material-ui/core'

// icons
import MyLocationIcon from '@material-ui/icons/MyLocation'

import { URL_ICON } from '../helpers'
import '../styles/weather.scss'

const FtoC = temp => Math.round((temp - 32) * (5 / 9))
const CtoF = temp => Math.round((temp * ( 9 / 5 )) + 32)

class Weather extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            temp : '',
            active : 0
        }
    }

    handleToFahrenheit = _ => {
        const { temp } = this.state
        const { main } = this.props
        const C = temp ? temp : Math.round(main.temp - 273.15)
        this.setState({ temp : CtoF(C), active : 1 })
    }

    handleToCelcius = _ => {
        this.setState(state => ({ temp : FtoC(state.temp), active : 0 }))
    }

    render () {
        const { weather, main, location } = this.props
        const { temp, active } = this.state
        console.log('temp : ', temp)

        return (
            <div className="weather">
                <div className="temp-icon">
                    <img 
                        src={URL_ICON + (weather && weather.icon) + '@4x.png'} 
                        alt="weather-icon"/>
                    <div className="temp-info">
                        <div className="location">
                            <MyLocationIcon fontSize="small"/>
                            <h3>{location}</h3>
                        </div>
                        <div className="temp">
                            <h1>{temp ? temp : (main && Math.round(main.temp - 273.15))}</h1>
                            <div id="button-container">
                                <Button 
                                    id="button" 
                                    disabled={ !active ? true : false }
                                    style={{ fontSize: active ? '20px' : '32px'}}
                                    onClick={this.handleToCelcius}>C</Button>
                                <Button 
                                    id="button" 
                                    disabled={ active ? true : false }
                                    style={{ fontSize: !active ? '20px' : '32px'}}
                                    onClick={this.handleToFahrenheit}>F</Button>
                            </div>
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