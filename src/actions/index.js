import Axios from 'axios'
import { URL_ONE, API, GET_WEATHER, SET_THEME } from '../helpers'
import { 
    early_morning, 
    morning, 
    day, 
    afternoon, 
    early_night, 
    night, 
    after_mid_night 
} from '../assets'

const EXC = '&exclude=hourly'

export const getWeather = (location) => {
    return async dispatch => {
        try {
            const query = URL_ONE + location + EXC + API
            console.log(query)
            const { data } = await Axios.get(query)
            dispatch({ type : GET_WEATHER, payload : data })
        } catch (err) { console.log(err) }
    }
}

export const setTheme = () => {
    const time = new Date().getHours() // 24 hours
    let theme = {
        background : '',
        color : ''
    }

    if (time > 1 && time <= 4) {
        theme.background = after_mid_night
        theme.color = 'dark'
    } else if (time > 4 && time <= 6.5) {
        theme.background = early_morning
        theme.color = 'dark'
    } else if (time > 6.5 && theme <= 10) {
        theme.background = morning
        theme.color = 'light'
    } else if (time > 10 && time  <= 15) {
        theme.background = day
        theme.color = 'light'
    } else if (time > 15 && time <= 17.5) {
        theme.background = afternoon
        theme.color = 'light'
    } else if (time > 17.5 && time <= 22) {
        theme.background = early_night
        theme.color = 'dark'
    } else {
        theme.background = night
        theme.color = 'dark'
    }

    return { type : SET_THEME, payload : theme }
}