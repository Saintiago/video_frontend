import * as action from './actionTypes'
import {requestList} from "./requestList";

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

export function paginate(params) {
  return function (dispatch) {
    dispatch(updatePaginationData(params));
    dispatch(requestList(params));
  }
}

export function updatePaginationData(params) {
  return {
    type: action.UPDATE_PAGINATION_DATA,
    params
  }
}