import Axios from 'axios'
import { URL, API, GET_WEATHER } from '../helpers'

export const getWeether = (location) => {
    return async dispatch => {
        try {
            const { data } = await Axios.get(URL + location + API)
            dispatch({ type : GET_WEATHER, payload : data })
        } catch (err) { console.log(err) }
    }
}