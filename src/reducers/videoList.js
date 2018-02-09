import * as actionType from '../actions/actionTypes'
import progressPercents from '../lib/progress'

function videoList(state = {
  items: [],
  lastUpdated: 0,
  isUploading: false,
  progress: 0
}, action) {
  switch (action.type) {
    case actionType.REQUEST_LIST_START:
      return {...state, ...{isFetching: true}};
    case actionType.REQUEST_LIST_SUCCESS:
      return {...state, ...{items: action.items, isFetching: false}};
    case actionType.UPLOAD_VIDEO_START:
      return {...state, ...{isUploading: true}};
    case actionType.UPLOAD_VIDEO_FAILURE:
      return {...state, ...{isUploading: false}};
    case actionType.UPLOAD_VIDEO_SUCCESS:
      return {...state, ...{isUploading: false}};
    case actionType.UPLOAD_VIDEO_PROGRESS:
      return {...state, ...{progress: progressPercents(action.loaded, action.total)}};
    default:
      return state;
  }
}

export default videoList;