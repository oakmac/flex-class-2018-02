import React from 'react'

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
    <tr key={idx}>
      <td>{props.plu}</td>
      <td>{props.name}</td>
      <td>{props.count}</td>
      <td className='align-right'>$ {props.price}</td>
    </tr>
  )
}

function InventoryTable (props) {
  const rows = props.items.map(TableRow)

  return (
    <table className='table is-striped is-fullwidth is-hoverable'>
      <TableHeader />
      <tbody>{rows}</tbody>
    </table>
  )
}

export default InventoryTable
