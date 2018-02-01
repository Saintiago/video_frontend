import {combineReducers} from 'redux'
import {
  REQUEST_LIST_START,
  REQUEST_LIST_SUCCESS,
  REQUEST_LIST_FAILURE
} from '../actions/actions'

function videoList(state = {
                     isFetching: false,
                     error: 0,
                     items: [],
                     lastUpdated: 0
                   },
                   action) {
  switch (action.type) {
    case REQUEST_LIST_START:
      return {...state, ...{isFetching: true}};
    case REQUEST_LIST_SUCCESS:
      return {...state, ...{items: action.items}};
    case REQUEST_LIST_FAILURE:
      return {...state, ...{error: 1}};
    default:
      return state;
  }
}

export const rootReducer = combineReducers({
  videoList
});