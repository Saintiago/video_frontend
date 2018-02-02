import * as actionType from '../actions/actionTypes'

function videoList(state = {
  isFetching: false,
  error: 0,
  items: [],
  lastUpdated: 0,
  video: null
}, action) {
  switch (action.type) {
    case actionType.REQUEST_LIST_START:
      return {...state, ...{isFetching: true}};
    case actionType.REQUEST_LIST_SUCCESS:
      return {...state, ...{items: action.items, isFetching: false}};
    case actionType.REQUEST_LIST_FAILURE:
      return {...state, ...{error: 1, isFetching: false}};
    default:
      return state;
  }
}

export default videoList;