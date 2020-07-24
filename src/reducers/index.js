import { GET_WEATHER } from '../helpers'

const INITIAL_STATE = {
    location : '',
    current : {},
    weather : {},
    daily : []
}

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case GET_WEATHER : 
            return {
                ...state,
                location : action.payload.timezone,
                current : action.payload.current,
                weather : action.payload.current && action.payload.current.weather[0],
                daily : action.payload.daily
            }
        default :
            return state
    }
}