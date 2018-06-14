import React, { Component } from 'react'
import {NumberInputField, TextInputField} from './Inputs.js'
import {addItem} from '../inventory.js'

function SuccessMsg (props) {
  return (
    <div className='notification is-success'>
      <button className='delete' onClick={props.closeFn} />
      <p>Item added!</p>
    </div>
  )
}

function ActionBar (props) {
  return (
    <div className='field is-grouped'>
      <div className='control'>
        <button className='button is-link' onClick={props.onSubmit}>Add Item</button>
      </div>
      <div className='control'>
        <button className='button is-text' onClick={props.onReset}>Reset</button>
      </div>
    </div>
  )
}

class NewItemPage extends Component {
  constructor () {
    super()

    this.state = {
      count: 0,
      name: '',
      plu: '',
      price: 1.00,
      showSuccess: false
    }
  }

  closeSuccessMsg () {
    this.setState({showSuccess: false})
  }

  submitNewItem () {
    // TODO: do some input validation here

    // add the new item to inventory
    const newItem = {
      name: this.state.name,
      plu: this.state.plu,
      count: this.state.count,
      price: this.state.price
    }
    addItem(newItem)

    // reset our component state
    this.setState({showSuccess: true})
    this.resetFormFields()
  }

  // reset the form to it's initial state
  resetFormFields () {
    this.setState({
      count: 0,
      name: '',
      plu: '',
      price: 1.00
    })
  }

  // upate a single property from an <input> element
  updateProperty (fieldId, evt) {
    const newValue = evt.currentTarget.value
    this.setState(function (prevState) {
      let newObj = {}
      newObj[fieldId] = newValue
      return newObj
    })
  }

  render () {
    const closeSuccessMsg = this.closeSuccessMsg.bind(this)
    const successNotification = this.state.showSuccess ? <SuccessMsg closeFn={closeSuccessMsg} /> : null

    // C. Oakman
    // We are binding these functions to this component class, and at the same
    // time "adding" an argument to their execution. Nifty.
    const nameChangeFn = this.updateProperty.bind(this, 'name')
    const pluChangeFn = this.updateProperty.bind(this, 'plu')
    const priceChangeFn = this.updateProperty.bind(this, 'price')
    const countChangeFn = this.updateProperty.bind(this, 'count')

    const submitFn = this.submitNewItem.bind(this)
    const resetFn = this.resetFormFields.bind(this)

    return (
      <section>
        {successNotification}
        <TextInputField label='Product Name' value={this.state.name} placeholderTxt='Product Name' onChange={nameChangeFn} />
        <TextInputField label='PLU Code' value={this.state.plu} placeholderTxt='PLU Code' onChange={pluChangeFn} />
        <NumberInputField label='Price' value={this.state.price} step={0.01} onChange={priceChangeFn} />
        <NumberInputField label='Inventory' value={this.state.count} onChange={countChangeFn} />
        <ActionBar onSubmit={submitFn} onReset={resetFn} />
      </section>
    )
  }
}

export default NewItemPage
