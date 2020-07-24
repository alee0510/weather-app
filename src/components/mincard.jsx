import React from 'react'
import { useSelector } from 'react-redux'

import Acrylic from './acrylic'
import '../styles/minicard.scss'

const MiniCard = props => {
    const main = useSelector(state => state.main)
    const visibility = useSelector(state => state.visibility)
    const wind = useSelector(state => state.wind)
    const clouds = useSelector(state => state.clouds)

    return (
        <div className="mini-card">
            <Acrylic radius="r10" opacity="o60">Feel like {main && Math.round(main.feels_like - 273.15)} <sup>o</sup> C</Acrylic>
            <Acrylic radius="r10" opacity="o60">Pressure {main && (main.pressure / 1000)} bar </Acrylic>
            <Acrylic radius="r10" opacity="o60">Humidity {main && main.humidity} %</Acrylic>
            <Acrylic radius="r10" opacity="o60">Visibility { visibility / 1000 } km</Acrylic>
            <Acrylic radius="r10" opacity="o60">Wind {wind && wind.speed} m/s </Acrylic>
            <Acrylic radius="r10" opacity="o60">Clouds {clouds && clouds.all} % </Acrylic>
        </div>
    )
}

export default MiniCard