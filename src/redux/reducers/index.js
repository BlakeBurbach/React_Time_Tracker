import { combineReducers } from 'redux';
import user from './userReducer';
import login from './loginReducer';
import TaskEntryTableReducer from './TaskEntryTableReducer';

const store = combineReducers({
  user,
  login,
  TaskEntryTableReducer
});

export default store;
