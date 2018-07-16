import { combineReducers } from 'redux';

const SetTaskEntryTable = (state = [], action) => {
    switch (action.type) {
        case 'SET_TASK_ENTRY_TABLE':
            return action.payload;
        default:
            return state;
    }
}

export default combineReducers({
    SetTaskEntryTable,
});