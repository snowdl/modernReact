import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import authReducer from './authReducer';
import streamReducer from './streamReducer';

export default combineReducers({
  //to check whether this is working
  auth: authReducer,
  form: formReducer,
  stream: streamReducer,
});
