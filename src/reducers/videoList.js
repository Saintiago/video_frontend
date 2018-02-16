import * as actionType from '../actions/actionTypes'
import { updateItemStatus } from '../lib/videoList';

function videoList(state = {
  items: [],
  needsUpdate: false
}, action) {
  switch (action.type) {
    case actionType.REQUEST_LIST_SUCCESS:
      return {...state, ...{items: action.items}};
    case actionType.REQUEST_STATUS_SUCCESS:
      return {...state, ...{items: updateItemStatus(state.items, action.id, action.status)}};
    default:
      return state;
  }
}

export default videoList;