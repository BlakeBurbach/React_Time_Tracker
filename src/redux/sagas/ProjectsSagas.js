import { call, put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

// const config = {
//     headers: { 'Content-Type': 'application/json' },
//     withCredentials: true,
// };

function* ProjectsSaga() {
    yield takeLatest('GET_PROJECTS', getProjects);
}

function* getProjects() {
    try {
        const GetProjectsResponse = yield call(axios.get,'/api/projects');
        yield put({
            type: 'SET_PROJECTS',
            payload: GetProjectsResponse.data
        })
    } catch (error) {
        console.log('getProjects ERROR - check projects GET route in server');
    }
}

export default ProjectsSaga;