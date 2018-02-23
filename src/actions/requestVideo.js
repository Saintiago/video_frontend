import {switchView} from "./actions";
import * as view from "../routing/views";
import loader from '../lib/loader';
import {validateVideo} from "../lib/validators";
import * as action from "./actionTypes";
import {VIDEO_REQUEST_URL} from "../config";

export function requestVideoStart() {
  return {
    type: action.REQUEST_VIDEO_START
  }
}

export function requestVideoSuccess(video) {
  return {
    type: action.REQUEST_VIDEO_SUCCESS,
    video
  }
}

export function requestVideoFailure(error) {
  return {
    type: action.REQUEST_VIDEO_FAILURE,
    error
  }
}

export function requestVideo(id) {

  return function(dispatch) {
    dispatch(requestVideoStart());

    loader('GET', VIDEO_REQUEST_URL.replace('%id%', id), { "Accept": "application/json"})
      .then(response => JSON.parse(response))
      .then(
        function (json) {
          if (!validateVideo(json)) {
            throw new Error('incorrect video json.');
          }
          return dispatch(requestVideoSuccess(json))
        }
      )
      .then(
        () => dispatch(switchView(view.DETAILED))
      )
      .catch(
        error => dispatch(requestVideoFailure(error))
      );
  }
}