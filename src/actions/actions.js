import { fetch } from 'cross-fetch';

export const REQUEST_LIST_START = 'REQUEST_LIST_START';
export function requestListStart() {
  return {
    type: REQUEST_LIST_START
  }
}

export const REQUEST_LIST_SUCCESS = 'REQUEST_LIST_SUCCESS';
export function requestListSuccess(items) {
  return {
    type: REQUEST_LIST_SUCCESS,
    items
  }
}

export const REQUEST_LIST_FAILURE = 'REQUEST_LIST_FAILURE';
export function requestListFailure(error) {
  return {
    type: REQUEST_LIST_FAILURE,
    error
  }
}

export function requestList() {

  return function(dispatch) {
    dispatch(requestListStart());
    return fetch('https://virtserver.swaggerhub.com/ilya.shikhaleev/go-workshop-2018/1.0.0/api/v1/list', {
      headers: { "Accept": "application/json"}
    })
      .then(
        response => response.json()
    )
      .then(
        json => dispatch(requestListSuccess(json))
    ).catch(
      error => dispatch(requestListFailure(error))
    )
  }
}

export const REQUEST_VIDEO_START = 'REQUEST_VIDEO_START';
export const REQUEST_VIDEO_SUCCESS = 'REQUEST_VIDEO_SUCCESS';
export const REQUEST_VIDEO_FAILURE = 'REQUEST_VIDEO_FAILURE';