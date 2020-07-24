import { GET_WEATHER } from '../helpers'
const INITIAL_STATE = {
    coord : {},
    weather : {},
    main : {},
    visibility : null,
    wind : {},
    clouds : {},
    rain : {},
    sys : {},
    name : '',
}

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case GET_WEATHER : 
            return { ...state, 
                coord : action.payload.coord,
                weather : action.payload.weather[0],
                main : action.payload.main,
                visibility : action.payload.visibility,
                wind : action.payload.wind,
                clouds : action.payload.clouds,
                sys : action.payload.sys,
                name : action.payload.name 
            }
        default :
            return state
    }
}