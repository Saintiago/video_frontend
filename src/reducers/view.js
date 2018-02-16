import * as view from '../routing/views'
import * as actionType from '../actions/actionTypes'
import progressPercents from "../lib/progress";

export default function (state = {
  currentView: view.NONE,
  loading: false,
  error: '',
  isUploading: false,
  progress: 0
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
    case actionType.UPLOAD_VIDEO_START:
      return {...state, ...{isUploading: true}};
    case actionType.UPLOAD_VIDEO_FAILURE:
      return {...state, ...{isUploading: false}};
    case actionType.UPLOAD_VIDEO_SUCCESS:
      return {...state, ...{isUploading: false}};
    case actionType.UPLOAD_VIDEO_PROGRESS:
      return {...state, ...{progress: progressPercents(action.loaded, action.total)}};
    case actionType.REQUEST_STATUS_FAILURE:
      return {...state, ...{error: action.error.message}};
    default:
      return state;
  }
}