import { combineReducers } from 'redux';

const SetProjects = (state = null, action) => {
    switch (action.type) {
        case 'SET_PROJECTS':
            return action.payload;
        default:
            return state;
    }
}

export default combineReducers({
    SetProjects,
});