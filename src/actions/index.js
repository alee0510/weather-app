import Axios from 'axios'
import { URL_ONE, API, GET_WEATHER, SET_THEME } from '../helpers'

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

}