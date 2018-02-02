import * as view from '../routing/views'
import * as actionType from '../actions/actionTypes'

export default function (state = view.LIST, action) {
  switch (action.type) {
    case actionType.SWITCH_VIEW:
      return action.view;
    case actionType.GO_TO_LIST:
      return view.LIST;
    default:
      return state;
  }
}