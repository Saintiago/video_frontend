import {switchView} from "./actions";
import * as view from "../routing/views";
import * as action from "./actionTypes";
import {LIST_REQUEST_URL} from "../config";
import {validateList} from "../lib/validators";
import loader from '../lib/loader'


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

export function requestList(data) {

  return function(dispatch, getState) {
    dispatch(requestListStart());

    const defaultParams = getState().videoList.paginationParams;
    data = {...defaultParams, ...(data || {})};
    const query = '?' + Object.entries(data).map(param => param.join('=')).join('&');

    loader(
      'GET',
      LIST_REQUEST_URL.replace('%query%', query),
      { "Accept": "application/json"}
      )
      .then(response => JSON.parse(response))
      .then(
        function (items) {
          if (!validateList(items)) {
            throw new Error('incorrect list json.');
          }
          return items;
        }
      )
      .then(items => dispatch(requestListSuccess(items)))
      .then(() => dispatch(switchView(view.LIST)))
      .catch(error => dispatch(requestListFailure(error)));
  }
}