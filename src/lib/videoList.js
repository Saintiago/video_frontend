import * as status from './videoStatus'

export function updateItemStatus(items, id, status) {
  return items.map(function(item) {
    return item.id === id ? {...item, status: status} : {...item};
  })
}

export function checkIfListUpdateRequired(receivedStatus) {
  return receivedStatus === status.READY;
}