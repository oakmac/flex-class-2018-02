const $ = window.jQuery

// ----------------------------------------------------------------------------
// Validation
// ----------------------------------------------------------------------------

function isBlank (str) {
  return str === ''
}

function isUnderMaxLength (maxLength, str) {
  return str.length > maxLength
}

// NOTE: these small predicate functions are easy to test like this
// Or you could pull in a library like https://validatejs.org/#validators-exclusion

// function isValidUsername (username) {
//   return username !== '' &&
//          username.length < 1000
// }
//
// console.assert(!isValidUsername(''))
// console.assert(isValidUsername('user'))
// console.assert(isValidUsername('       user'))

function hasSpaceChar (str) {
  return str.indexOf(' ') !== -1
}

const usernameMaxLength = 200
const passwordMaxLength = 500

// NOTE: it is powerful to model your application using data like the following:
// Note how adding or removing validation logic does not require touching the UI
// code at all. It's just modifying this data structure.
const usernameValidation = [
  {validationFn: isBlank,
    errorMsg: 'Username cannot be blank'},
  {validationFn: isUnderMaxLength.bind(null, usernameMaxLength),
    errorMsg: 'Username must be less than ' + usernameMaxLength + ' characters.'},
  {validationFn: hasSpaceChar,
    errorMsg: 'Username cannot contain any spaces.'}
]

const passwordValidation = [
  {validationFn: isBlank,
    errorMsg: 'Password cannot be blank'},
  {validationFn: isUnderMaxLength.bind(null, passwordMaxLength),
    errorMsg: 'Password must be less than ' + passwordMaxLength + ' characters.'}
]

// ----------------------------------------------------------------------------
// DOM Manipulation
// ----------------------------------------------------------------------------

function hideErrors () {
  $('#errorMsg').html('')
  $('#errorBox').hide()
}
function showErrors (errorMessages) {
  let errorHtml = '<ul>'
  errorMessages.forEach(function (msg) {
    errorHtml += '<li>' + msg + '</li>'
  })
  errorHtml += '</ul>'

  $('#errorMsg').html(errorHtml)
  $('#errorBox').show()
}

function receiveAjaxData (errors) {
  clearLoadingState()

  if (errors.length === 0) {
    hideErrors()
    // TODO: go to login success page
    console.log('success! user is logged in now')
  } else {
    showErrors(errors)
  }
}

function sendLoginRequest (username, password) {
  // simulate AJAX request
  window.setTimeout(function () {
    // receiveAjaxData([]) // simulates a success call
    receiveAjaxData(['Username already taken. Please choose another name.'])
  }, 600)
}

function clearLoadingState () {
  $('#loginBtn').attr('disabled', false)
                .val('Login Now')
}

function setLoadingState () {
  $('#loginBtn').attr('disabled', true)
                .val('Logging in ...')
}

// ----------------------------------------------------------------------------
// Events
// ----------------------------------------------------------------------------

function submitLoginForm (evt) {
  evt.preventDefault()

  const username = $('#username').val()
  const password = $('#password').val()

  let errors = []

  // NOTE: if you had more than two input fields, you would not want to enumerate
  // all of the options like this
  // Instead, make a data structure for each field. Example at the bottom of this file.
  usernameValidation.forEach(function (validation) {
    if (validation.validationFn(username)) {
      errors.push(validation.errorMsg)
    }
  })

  passwordValidation.forEach(function (validation) {
    if (validation.validationFn(password)) {
      errors.push(validation.errorMsg)
    }
  })

  if (errors.length === 0) {
    hideErrors()
    setLoadingState()
    sendLoginRequest(username, password)
  } else {
    showErrors(errors)
  }
}

function addEvents () {
  $('#loginForm').on('submit', submitLoginForm)
}

// ----------------------------------------------------------------------------
// Init
// ----------------------------------------------------------------------------

function init () {
  console.log('Initialize!')
  addEvents()
}

init()

// Example Multi-field validation data structure
// const validation = [
//   {inputId: 'username',
//    validation: usernameValidation},
//   {inputId: 'password',
//    validation: passwordValidation},
//   {inputId: 'street1',
//    validation: streetValidation},
//   {inputId: 'street2',
//    valiation: streetValidation},
//   ... etc
// ]
