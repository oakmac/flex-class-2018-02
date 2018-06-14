import React from 'react'

// C. Oakman - note that all of the render functions in this module are small
// All less than 10 lines.

function TableHeader () {
  return (
    <thead>
      <tr>
        <th>PLU</th>
        <th>Name</th>
        <th>Inventory</th>
        <th className='align-right'>Price</th>
      </tr>
    </thead>
  )
}

function TableRow (props, idx) {
  return (
    // C. Oakman
    // When you have a collection of sibling components React.js requires a unique
    // "key" property in order to help the diffing algorithm perform better.
    // You will see a warning in the console if you do not provide a key.
    // Commonly you just want to use the array index, like we are doing here.
    <tr key={idx}>
      <td>{props.plu}</td>
      <td>{props.name}</td>
      <td>{props.count}</td>
      <td className='align-right'>$ {props.price}</td>
    </tr>
  )
}

function InventoryTable (props) {
  // C. Oakman
  // It is very common to see array.map() used like this.
  // We want to go from an "array of data" to an "array of components", so we
  // map a Component function over every item in the array.
  const rows = props.items.map(TableRow)

  return (
    <table className='table is-striped is-fullwidth is-hoverable'>
      <TableHeader />
      <tbody>{rows}</tbody>
    </table>
  )
}

// C. Oakman
// Note that we are only exporting InventoryTable here.
// TableRow and TableHeader stay private to this module.
export default InventoryTable
