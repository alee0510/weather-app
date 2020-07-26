import { combineReducers } from 'redux'

import { GET_WEATHER, SET_THEME, START, END } from '../helpers'

const WAETHER_DATA = {
    location : '',
    current : {},
    weather : {},
    daily : [],
    loading : true
}

const THEME = {}

const weather =  (state = WAETHER_DATA, action) => {
    switch(action.type) {
        case GET_WEATHER : 
            return {
                ...state,
                location : action.payload.timezone,
                current : action.payload.current,
                weather : action.payload.current && action.payload.current.weather[0],
                daily : action.payload.daily
            }
        case START : 
            return { ...state, loading : true }
        case END :
            return { ...state, loading : false }
        default : return state
    }
}

const theme = (state = THEME, action) => {
    switch(action.type) {
        case SET_THEME : 
            return { ...action.payload }
        default : return state
    }
}

export default combineReducers({ weather, theme })