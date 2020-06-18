import React from 'react'
import Axios from 'axios'

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
        return (
            <div>
                <h1>Hello</h1>
            </div>
        )
    }
}

export default Main