import { combineReducers } from 'redux'
import videoList from './videoList';
import videoDetailed from './videoDetailed';
import view from './view';

export default combineReducers({
  videoList,
  videoDetailed,
  view
})