import * as actionType from '../actions/actionTypes'

function videoDetailed(state = {
  isFetching: false,
  video: null
}, action) {
  switch (action.type) {
    case actionType.REQUEST_VIDEO_START:
      return {...state, ...{isFetching: true}};
    case actionType.REQUEST_VIDEO_SUCCESS:
      return {...state, ...{video: action.video, isFetching: true}};
    default:
      return state;
  }
}

export default videoDetailed;