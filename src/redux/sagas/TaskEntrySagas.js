import { call, put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

function* TaskEntrySaga() {
    yield takeEvery('GET_TASK_ENTRIES', getTaskEntry);
    yield takeEvery('POST_NEW_TASK_ENTRY', postTaskEntry);
}

function* getTaskEntry() {
    try {
        const TaskEntryResponse = yield call(axios.get, '/api/task_entries');
        yield put({
            type: 'SET_TASK_ENTRY_TABLE',
            payload: TaskEntryResponse.data
        })
    } catch (error) {
        console.log('getTaskEntry ERROR - check task_entries GET route in server');
    }
}

function* postTaskEntry( action ) {
    try {
        yield call(axios.post, '/api/task_entries', action.payload);
        yield put({
            type: 'GET_TASK_ENTRIES'
        })
    } catch (error) {
        console.log('ERROR postTaskEntry - check task_entries POST route in server');
    }
}

export default TaskEntrySaga;