import * as actionType from '../actions/actionTypes'

function videoDetailed(state = {
  isFetching: false,
  error: 0,
  video: null
}, action) {
  switch (action.type) {
    case actionType.REQUEST_VIDEO_START:
      return {...state, ...{isFetching: true}};
    case actionType.REQUEST_VIDEO_SUCCESS:
      return {...state, ...{video: action.video, isFetching: true}};
    case actionType.REQUEST_VIDEO_FAILURE:
      return {...state, ...{error: 1, isFetching: true}};
    default:
      return state;
  }
}

export default videoDetailed;