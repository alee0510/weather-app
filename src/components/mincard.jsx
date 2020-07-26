import React from 'react'
import { useSelector } from 'react-redux'

import Acrylic from './acrylic'
import '../styles/minicard.scss'

const MiniCard = props => {
    const current = useSelector(({weather}) => weather.current)
    const main = useSelector(({theme}) => theme.main)

    return (
        <div className="mini-card">
            <Acrylic color={main} radius="r10" opacity="o60" style={style}>
                Feel like {current && Math.round(current.feels_like - 273.15)} <sup>o</sup> C
            </Acrylic>
            <Acrylic color={main} radius="r10" opacity="o60" style={style}>
                Pressure {current && (current.pressure / 1000)} bar 
            </Acrylic>
            <Acrylic color={main} radius="r10" opacity="o60" style={style}>
                Humidity {current && current.humidity} %
            </Acrylic>
            <Acrylic color={main} radius="r10" opacity="o60" style={style}>
                Visibility {current && current.visibility / 1000 } km
            </Acrylic>
            <Acrylic color={main} radius="r10" opacity="o60" style={style}>
                Wind {current && current.wind_speed} m/s 
            </Acrylic>
            <Acrylic color={main} radius="r10" opacity="o60" style={style}>
                Clouds {current && current.clouds} % 
            </Acrylic>
        </div>
    )
}


const style = {
    margin : '1% 1%'
}

export default MiniCard