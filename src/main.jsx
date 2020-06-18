import React from 'react'
import Axios from 'axios'

// custom components
import Acrylic from './components/acrylic'

// import assets
import { morning, day, afternoon, night } from './assets'

// API
const API = '&appid=fd2395620d3afcb1f6d8ac8b16d8b34a'
const URL = 'https://api.openweathermap.org/data/2.5/weather?q='

// main class
class Main extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            data : []
        }
    }

    // async componentDidMount () {
    //     try {
    //         const response = await Axios.get(URL + 'Jakarta' + API)
    //         console.log(response)
    //     } catch(error) {
    //         console.log(error)
    //     }
    // }

    render () {
        const containerStyle = {
            backgroundImage : `url(${morning})`,
            backgroundRepeat : 'no-repeat',
            backgroundSize : 'cover',
            height : '100vh',
            width : '100vw',
            display : 'flex',
            justifyContent : 'center',
            alignItems :'center'
        }
        return (
            <div style={containerStyle}>
               <Acrylic/>
            </div>
        )
    }
}

export default Main