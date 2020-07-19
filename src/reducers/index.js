import { GET_WEATHER } from '../helpers'
const INITIAL_STATE = {
    data : []
}

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case GET_WEATHER : 
            return { data : action.payload }
        default :
            return state
    }
}