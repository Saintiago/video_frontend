import { fetch } from 'cross-fetch';
import * as action from './actionTypes'
import * as view from '../routing/views'
import { validateList, validateVideo } from "../lib/validators";

export function requestListStart() {
  return {
    type: action.REQUEST_LIST_START
  }
}

export function requestListSuccess(items) {
  return {
    type: action.REQUEST_LIST_SUCCESS,
    items
  }
}

export function requestListFailure(error) {
  return {
    type: action.REQUEST_LIST_FAILURE,
    error
  }
}

export function requestList() {

  return function(dispatch) {
    dispatch(requestListStart());
    // https://virtserver.swaggerhub.com/ilya.shikhaleev/go-workshop-2018/1.0.0
    fetch('/api/v1/list', {
      headers: { "Accept": "application/json"}
    })
      .then(
        response => response.json()
    )
      .then(
        function (json) {
          if (!validateList(json)) {
            throw new Error('incorrect list json.');
          }
          return dispatch(requestListSuccess(json));
        }
    )
      .then(
        () => dispatch(switchView(view.LIST))
    )
      .catch(
        error => dispatch(requestListFailure(error))
    )
  }
}


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
    // https://virtserver.swaggerhub.com/ilya.shikhaleev/go-workshop-2018/1.0.0
    fetch('/api/v1/video/' + id, {
      headers: { "Accept": "application/json"}
    })
    .then(
      response => response.json(),
    )
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

export function switchView(viewId) {
  return {
    type: action.SWITCH_VIEW,
    view: viewId
  }
}

export function goToList() {
  return {
    type: action.GO_TO_LIST
  }
}

export function hideErrors() {
  return {
    type: action.HIDE_ERRORS
  }
}