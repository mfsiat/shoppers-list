// this is the meeting place for all reducers
// every reducer we create we import them here
import { combineReducers } from 'redux';
import itemReducer from './itemReducer.js';

export default combineReducers({
  item: itemReducer
})