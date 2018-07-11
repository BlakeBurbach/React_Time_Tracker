import { combineReducers } from 'redux';
import user from './userReducer';
import login from './loginReducer';
import TaskEntryTableReducer from './TaskEntryTableReducer';
import ProjectsReducer from './ProjectsReducer';

const store = combineReducers({
  user,
  login,
  TaskEntryTableReducer,
  ProjectsReducer,
});

export default store;
