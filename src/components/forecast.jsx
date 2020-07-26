import React from 'react'
import { connect } from 'react-redux'

import { URL_ICON } from '../helpers'

import Acrylic from './acrylic'
import '../styles/forecast.scss'

const getDate = (date) => {
    const dt = new Date(date * 1000).toDateString().split(' ')
    return `${dt[0]} ${dt[2]}`
}

class Daily extends React.Component {
    miniCard = _ => {
        return (this.props.daily || []).map((item, index) => (
            <Acrylic key={index} color="dark" radius="r15" opacity="o70" style={style}>
                <h2>{getDate(item.dt)}</h2>
                <img 
                    src={URL_ICON + (item.weather && item.weather[0].icon) + '@2x.png'} 
                    alt={`daily-icon-${index}`}
                />
                <div className="temp">
                    <h4 id="max">{item.temp && Math.round(item.temp.max - 273.15)} <sup>o</sup></h4>
                    <h4>{item.temp && Math.round(item.temp.min - 273.15)} <sup>o</sup></h4>
                </div>
                <h3>{item.weather && item.weather[0].description}</h3>
            </Acrylic>
        ))
    }
    render () {
        return (
            <div className="forecast">
                {this.miniCard()}
            </div>
        )
    }
}

const style = {
    width : 150,
    padding : '10px 16px'
}

const mapStore = ({ weather }) => ({ daily : weather.daily })

export default connect(mapStore)(Daily)