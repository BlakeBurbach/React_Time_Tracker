import { call, put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

// const config = {
//     headers: { 'Content-Type': 'application/json' },
//     withCredentials: true,
// };

function* TaskEntrySaga() {
    yield takeLatest('GET_TASK_ENTRIES', getTaskEntry);
}

function* getTaskEntry() {
    try {
        const TaskEntryResponse = yield call(axios.get,'/api/task_entries');
        yield console.log('TaskEntryResponse', TaskEntryResponse.data);
        yield put({
            type: 'SET_TASK_ENTRY_TABLE',
            payload: TaskEntryResponse.data
        })
    } catch (error) {
        console.log('getTaskEntry ERROR - check task_entries GET route in server');
    }
}

export default TaskEntrySaga;