import React from 'react'
import { connect } from 'react-redux'
import { CircularProgress } from '@material-ui/core'

// components
import Navbar from './components/navbar'
import Weather from './components/weather'
import MiniCard from './components/mincard'
import Daily from './components/forecast'
import Footer from './components/footer'

// others
import { getWeather, setTheme } from './actions'

// import style
import './styles/main.scss'

class Main extends React.Component {
    constructor (props) {
        super (props) 
        this.state = {
            styles : {}
        }
    }

    async componentDidMount () {
        await this.getLocation()
        await this.props.setTheme()
        await this.setState({ 
            styles : { 
                backgroundImage : `url(${this.props.background})`, 
            }
        })
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
        const { loading, location, color } = this.props
        if (loading && !location) {
            return (
                <div className="loading">
                    <CircularProgress/>
                </div>
            )
        }

        return (
            <div className="main-container" style={this.state.styles}>
                <Navbar/>
                <Weather/>
                <MiniCard/>
                <div className="daily-forecast">
                    <h1 style={{ color : color }}>Daily</h1>
                    <Daily/>
                </div>
                <Footer/>
            </div>
        )
    }
}

const mapStore = ({ theme, weather }) => ({ 
    background : theme.background,
    color : theme.color,
    loading : weather.loading,
    loacation : weather.loacation 
})

export default connect(mapStore, { getWeather, setTheme })(Main)