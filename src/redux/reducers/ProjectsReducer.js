import { combineReducers } from 'redux';

const SetProjects = (state = [], action) => {
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