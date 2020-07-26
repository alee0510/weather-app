import Axios from 'axios'
import { URL_ONE, GET_WEATHER, SET_THEME, START, END } from '../helpers'
import { 
    early_morning, 
    morning, 
    day, 
    afternoon, 
    early_night, 
    mid_night, 
    after_mid_night 
} from '../assets'

const EXC = '&exclude=hourly'

export const getWeather = (location) => {
    return async dispatch => {
        try {
            dispatch({ type : START })

            const API = process.env.REACT_APP_API_KEY
            const query = URL_ONE + location + EXC + API
            // console.log(query)
            const { data } = await Axios.get(query)
            dispatch({ type : GET_WEATHER, payload : data })
            
            dispatch({ type : END })
        } catch (err) { 
            console.log(err) 
            dispatch({ type : END })
        }
    }
}

export const setTheme = () => {
    const time = new Date().getHours() // 24 hours
    let theme = {
        main : '',
        background : '',
        color : ''
    }

    if (time > 1 && time <= 4) {
        theme.main = 'dark'
        theme.background = after_mid_night
        theme.color = '#ffffff'
    } else if (time > 4 && time <= 6.5) {
        theme.main = 'dark'
        theme.background = early_morning
        theme.color = '#ffffff'
    } else if (time > 6.5 && theme <= 10) {
        theme.main = 'light'
        theme.background = morning
        theme.color = '#2d3436'
    } else if (time > 10 && time  <= 15) {
        theme.main = 'light'
        theme.background = day
        theme.color = '#2d3436'
    } else if (time > 15 && time <= 17.5) {
        theme.main = 'dark'
        theme.background = afternoon
        theme.color = '#ffffff'
    } else if (time > 17.5 && time <= 22) {
        theme.main = 'dark'
        theme.background = early_night
        theme.color = '#ffffff'
    } else {
        theme.mian = 'dark'
        theme.background = mid_night
        theme.color = '#ffffff'
    }

    return { type : SET_THEME, payload : theme }
}