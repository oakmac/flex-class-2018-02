import React, { Component } from 'react'
import InventoryTable from './Inventory/InventoryTable.js'

function NoItemsFound () {
  return (
    <p className='no-items'>No items found.</p>
  )
}

function SearchInput (props) {
  return (
    <input className='input is-medium'
      type='text'
      value={props.searchTxt}
      onChange={props.updateSearchTxt}
      placeholder='Search Inventory …' />
  )
}

const dummyItems = [
  {plu: 4011, name: 'Bananas', count: 604, price: 0.78},
  {plu: 4030, name: 'Kiwi', count: 699, price: 1.40},
  {plu: 4040, name: 'Plums', count: 107, price: 0.78},
  {plu: 4048, name: 'Limes', count: 91, price: 0.35},
  {plu: 4053, name: 'Lemons', count: 688, price: 0.30},
  {plu: 4062, name: 'Cucumbers', count: 641, price: 0.99},
  {plu: 4065, name: 'Green Peppers', count: 815, price: 1.12},
  {plu: 4066, name: 'Green Beans', count: 74, price: 1.67},
  {plu: 4070, name: 'Ginger Root', count: 743, price: 2.67},
  {plu: 4072, name: 'Russet Potatoes', count: 401, price: 1.24},
  {plu: 4073, name: 'Red Potatoes', count: 773, price: 1.23},
  {plu: 4075, name: 'Red Leaf Lettuce', count: 585, price: 0.88},
  {plu: 4076, name: 'Green Leaf Lettuce', count: 13, price: 0.72},
  {plu: 4080, name: 'Asparagus', count: 55, price: 0.74},
  {plu: 4082, name: 'Red Onions', count: 899, price: 2.43},
  {plu: 4087, name: 'Roma Tomatoes', count: 115, price: 1.76},
  {plu: 4091, name: 'Sweet Potatoes', count: 287, price: 0.87},
  {plu: 4430, name: 'Pineapple', count: 99, price: 1.12},
  {plu: 4554, name: 'Red Cabbage', count: 512, price: 1.89},
  {plu: 4562, name: 'Carrots', count: 832, price: 0.43},
  {plu: 4608, name: 'Garlic', count: 96, price: 1.67},
  {plu: 4612, name: 'Celery', count: 743, price: 3.51},
  {plu: 4629, name: 'Leeks', count: 366, price: 2.44},
  {plu: 4662, name: 'Shallots', count: 385, price: 1.12},
  {plu: 4663, name: 'White Onions', count: 214, price: 0.93},
  {plu: 4665, name: 'Yellow Onions', count: 925, price: 0.88},
  {plu: 4688, name: 'Red Bell Peppers', count: 571, price: 2.40},
  {plu: 4762, name: 'Artichokes', count: 706, price: 2.77},
  {plu: 4784, name: 'Yellow Squash', count: 144, price: 3.57},
  {plu: 4811, name: 'Turnips', count: 834, price: 4.17}
]

class Inventory extends Component {
  constructor () {
    super()

    this.state = {
      inventory: dummyItems,
      searchTxt: ''
    }
  }

  // C. Oakman - we will pass the synthetic React event to this function as "evt"
  updateSearchTxt (evt) {
    // C. Oakman - you can get the text value out of the event like this:
    const newText = evt.currentTarget.value
    this.setState({searchTxt: newText})
  }

  // Does this item match the search text?
  // NOTE: this function does not really need to be inside the component class
  isMatch (searchTxt, item) {
    // make everything a string and lower case
    const pluString = item.plu.toString()
    const lcSearchTxt = searchTxt.toLowerCase()
    const lcName = item.name.toLowerCase()

    return pluString.includes(lcSearchTxt) ||
           lcName.includes(lcSearchTxt)
  }

  render () {
    const updateSearchTxt = this.updateSearchTxt.bind(this)
    const matchFn = this.isMatch.bind(null, this.state.searchTxt)
    const filteredItems = this.state.inventory.filter(matchFn)

    let bodyComponent = <InventoryTable items={filteredItems} />
    if (filteredItems.length === 0) {
      bodyComponent = <NoItemsFound />
    }

    return (
      <section className='dashboard-section'>
        <SearchInput searchTxt={this.state.searchTxt} updateSearchTxt={updateSearchTxt} />
        <div className='push-down'>
          {bodyComponent}
        </div>
      </section>
    )
  }
}

export default Inventory
