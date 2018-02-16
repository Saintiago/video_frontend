export function updateItemStatus(items, id, status) {
  return items.map(function(item) {
    return item.id === id ? {...item, status: status} : {...item};
  })
}