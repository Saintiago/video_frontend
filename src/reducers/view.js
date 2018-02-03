import * as view from '../routing/views'
import * as actionType from '../actions/actionTypes'

export default function (state = {
  currentView: view.NONE,
  loading: false,
  error: ''
}, action) {
  switch (action.type) {
    case actionType.SWITCH_VIEW:
      return {...state, ...{currentView: action.view, loading: false}};
    case actionType.GO_TO_LIST:
      return {...state, ...{currentView: view.LIST, loading: false}};
    case actionType.HIDE_ERRORS:
      return {...state, ...{error: ''}};
    case actionType.REQUEST_LIST_START:
    case actionType.REQUEST_VIDEO_START:
      return {...state, ...{loading: true, error: ''}};
    case actionType.REQUEST_LIST_FAILURE:
    case actionType.REQUEST_VIDEO_FAILURE:
      return {...state, ...{loading: false, error: action.error.message}};
    default:
      return state;
  }
}