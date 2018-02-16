import * as actionType from '../actions/actionTypes'

function videoDetailed(state = {
  video: null
}, action) {
  switch (action.type) {
    case actionType.REQUEST_VIDEO_SUCCESS:
      return {...state, ...{video: action.video}};
    default:
      return state;
  }
}

export default videoDetailed;