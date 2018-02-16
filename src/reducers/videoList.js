import * as actionType from '../actions/actionTypes'
import { updateItemStatus } from '../lib/videoList';

function videoList(state = {
  items: [],
  paginationParams: {
    limit: 6,
    skip: 0
  }
}, action) {
  switch (action.type) {
    case actionType.REQUEST_LIST_SUCCESS:
      return {...state, ...{items: action.items}};
    case actionType.REQUEST_STATUS_SUCCESS:
      return {...state, ...{items: updateItemStatus(state.items, action.id, action.status)}};
    case actionType.UPDATE_PAGINATION_DATA:
      return {...state, ...{paginationParams: action.params}};
    default:
      return state;
  }
}

export default videoList;