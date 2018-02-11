import * as actionType from '../actions/actionTypes'

function videoList(state = {
  items: [],
  lastUpdated: 0
}, action) {
  switch (action.type) {
    case actionType.REQUEST_LIST_START:
      return {...state, ...{isFetching: true}};
    case actionType.REQUEST_LIST_SUCCESS:
      return {...state, ...{items: action.items, isFetching: false}};
    default:
      return state;
  }
}

export default videoList;