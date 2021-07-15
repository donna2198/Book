import { combineReducers } from 'redux';
import book from './book';
import auth from './auth';


export default combineReducers({ book,auth })