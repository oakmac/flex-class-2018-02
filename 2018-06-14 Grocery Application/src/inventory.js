function addItem (newItem) {

}

function deleteItem (plu) {

}

function getInventory () {
  let inventory = null
  try {
    inventory = JSON.parse(window.localStorage.getItem('inventory'))
  } catch (e) {
    console.error('Uh-oh! Inventory in localStorage was not valid JSON')
  }

  return inventory
}

function setInventory (newInventory) {
  window.localStorage.setItem('inventory', JSON.stringify(newInventory))
}

export {addItem, deleteItem, getInventory, setInventory}
