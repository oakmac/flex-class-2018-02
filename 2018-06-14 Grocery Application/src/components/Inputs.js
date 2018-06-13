import React from 'react'

function NumberInputField (props) {
  const step = props.step ? props.step : 1

  return (
    <div className='field'>
      <label className='label'>{props.label}</label>
      <div className='control'>
        <input className='input'
          type={props.inputType}
          onChange={props.onChange}
          placeholder={props.placeholderTxt}
          step={step}
          value={props.value} />
      </div>
    </div>
  )
}

function TextInputField (props) {
  return (
    <div className='field'>
      <label className='label'>{props.label}</label>
      <div className='control'>
        <input className='input'
          type={props.inputType}
          onChange={props.onChange}
          placeholder={props.placeholderTxt}
          value={props.value} />
      </div>
    </div>
  )
}

// C. Oakman
// Hold onto your hats: this module exports more than one thing!
// This module exports an object with two fields: NumberInputField and TextInputField
// The idea is that these components are completely generic and could be used
// anywhere in your application. They are not specific to any individual page.
export {NumberInputField, TextInputField}
