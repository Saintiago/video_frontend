import * as action from "./actionTypes";
import upload from "../lib/loader";
import {requestList} from "./requestList";
import {UPLOAD_VIDEO_URL} from "../config";

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

    const headers = {'Accept': 'text/plain'};
    const method = 'POST';

    let form = new FormData();
    form.append('path', '/');
    form.append('file[]', file);

    const onProgress = (e) => {
      if (e.lengthComputable) {
        dispatch(uploadVideoProgress(e.loaded, e.total));
      }
    };

    upload(method, UPLOAD_VIDEO_URL, headers, form, onProgress)
      .then(() => dispatch(uploadVideoSuccess()))
      .then(() => dispatch(requestList({skip: 0})))
      .catch((err) => dispatch(uploadVideoFailure(new Error(err.status + ': ' + err.statusText))));
  }
}