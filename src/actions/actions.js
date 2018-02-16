import { fetch } from 'cross-fetch';
import * as action from './actionTypes'
import * as view from '../routing/views'
import {validateList, validateStatus, validateVideo} from '../lib/validators';
import upload from '../lib/uploader'

// https://virtserver.swaggerhub.com/ilya.shikhaleev/go-workshop-2018/1.0.0
const BASE_URL = 'https://virtserver.swaggerhub.com/ilya.shikhaleev/go-workshop-2018/1.0.0';

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

    /*dispatch(requestListSuccess([
      {
        "id": "d290f1ee-6c54-4b01-90e6-d701748f0851",
        "name": "Black Retrospetive Woman",
        "duration": 127,
        "thumbnail": "/some/image.png",
        "status": 5
      }
    ]));

    dispatch(switchView(view.LIST))*/
    fetch(BASE_URL + '/api/v1/list', {
      headers: { "Accept": "application/json"}
    })
      .then(response => response.json())
      .then(
        function (items) {
          if (!validateList(items)) {
            throw new Error('incorrect list json.');
          }
          return items;
        }
      )
      .then( items => dispatch(requestListSuccess(items)))
      .then(() => dispatch(switchView(view.LIST)))
      .catch(error => dispatch(requestListFailure(error)));
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

    fetch(BASE_URL + '/api/v1/video/' + id, {
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

export function uploadVideoStart() {
  return {
    type: action.UPLOAD_VIDEO_START
  }
}

export function uploadVideoSuccess() {
  return {
    type: action.UPLOAD_VIDEO_SUCCESS,
  }
}

export function uploadVideoFailure(error) {
  return {
    type: action.UPLOAD_VIDEO_FAILURE,
    error
  }
}

export function uploadVideoProgress(loaded, total) {
  return {
    type: action.UPLOAD_VIDEO_PROGRESS,
    loaded,
    total
  }
}

export function uploadVideo(event) {

  if (!event.target.files.length) {
    return {
      type: action.NOTHING_HAPPENED
    };
  }

  const file = event.target.files[0];

  return function(dispatch) {
    dispatch(uploadVideoStart());

    const headers = new Map([
      ['Accept', 'text/plain'],
    ]);
    const method = 'POST';

    const url = BASE_URL + '/api/v1/video';

    let form = new FormData();
    form.append('path', '/');
    form.append('file[]', file);

    const onProgress = (e) => {
      if (e.lengthComputable) {
        dispatch(uploadVideoProgress(e.loaded, e.total));
      }
    };

    upload(method, url, headers, form, onProgress)
      .then(() => dispatch(uploadVideoSuccess()))
      .then(() => dispatch(requestList()))
      .catch((err) => dispatch(uploadVideoFailure(new Error(err.status + ': ' + err.statusText))));
  }
}

export function requestStatusSuccess(id, status) {
  return {
    type: action.REQUEST_STATUS_SUCCESS,
    id,
    status
  }
}

export function requestStatusFailure(id, error) {
  return {
    type: action.REQUEST_STATUS_FAILURE,
    id,
    error
  }
}

export function requestStatus(id) {
  return function(dispatch) {

    setTimeout(function() {

      fetch(BASE_URL + '/api/v1/video/' + id + '/status', {
        headers: { "Accept": "application/json"}
      })
      .then(response => response.json())
      .then(
        function (json) {
          if (!validateStatus(json)) {
            throw new Error('incorrect status json.');
          }
          dispatch(requestStatusSuccess(id, json.status));
        }
      )
      .catch(error => dispatch(requestStatusFailure(id, error)));
    }, 2000);
  }
}


