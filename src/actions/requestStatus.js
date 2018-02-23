import {validateStatus} from "../lib/validators";
import loader from '../lib/loader'
import {requestList} from "./requestList";
import * as status from "../lib/videoStatus";
import * as action from "./actionTypes";
import {STATUS_REQUEST_URL, STATUS_REQUEST_DELAY} from "../config";

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

      loader('GET', STATUS_REQUEST_URL.replace('%id%', id), { "Accept": "application/json"})
        .then(response => JSON.parse(response))
        .then(
          function (json) {
            if (!validateStatus(json)) {
              throw new Error('incorrect status json.');
            }
            dispatch(requestStatusSuccess(id, json.status));
            if (json.status === status.READY) {
              dispatch(requestList({skip: 0}));
            }
          }
        )
        .catch(error => dispatch(requestStatusFailure(id, error)));
    }, STATUS_REQUEST_DELAY);
  }
}