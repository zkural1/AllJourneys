import { RECEIVE_TRAIL } from '../actions/trail'

const trailsReducer = (state = {}, action) => {
    
    Object.freeze(state);
    let newState = Object.assign({}, state);
    switch (action.type) {
        case RECEIVE_TRAIL:
            newState= {[action.payload.trail.id]: action.payload.trail}
            return newState

        default:
            return state;
    }
}

export default trailsReducer