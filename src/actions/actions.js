import { fetch } from 'cross-fetch';
import * as action from './actionTypes'
import * as view from '../routing/views'

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
    fetch('/api/v1/list', {
      headers: { "Accept": "application/json"}
    })
      .then(
        response => response.json(),
        error => dispatch(requestListFailure(error))
    )
      .then(
        json => dispatch(requestListSuccess(json))
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
    fetch('/api/v1/video/' + id, {
      headers: { "Accept": "application/json"}
    })
    .then(
      response => response.json(),
      error => dispatch(requestVideoFailure(error))
    )
    .then(
      json => dispatch(requestVideoSuccess(json))
    )
    .then(
      () => dispatch(switchView(view.DETAILED))
    )
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