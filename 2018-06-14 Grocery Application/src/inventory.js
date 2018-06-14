// C. Oakman
// This small module serves as a wrapper around localStorage and defines what you
// can do with the grocery inventory: add, delete, get, etc.
// It's always a good idea to wrap your data in modules like this that define
// what you can and cannot do instead of sprinkling localStorage calls all over
// the application.

// add an item to inventory
// returns the full inventory (with the new item included)
function addItem (newItem) {
  let inventory = getInventory()
  inventory.push(newItem)
  setInventory(inventory)
  return getInventory()
}

// delete an item from the inventory via plu code
// returns the full inventory (with the item deleted)
function deleteItem (plu) {
  const inventory = getInventory()
  const newInventory = inventory.filter(function (item) {
    return item.plu.toString() !== plu.toString()
  })
  setInventory(newInventory)
  return getInventory()
}

// returns an array of the inventory or null if nothing found in localStorage
function getInventory () {
  try {
    return JSON.parse(window.localStorage.getItem('inventory'))
  } catch (e) {
    console.error('Uh-oh! Inventory in localStorage was not valid JSON')
    return null
  }
}

function setInventory (newInventory) {
  window.localStorage.setItem('inventory', JSON.stringify(newInventory))
}

export {addItem, deleteItem, getInventory, setInventory}
