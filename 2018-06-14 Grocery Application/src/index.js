import React from 'react'
import ReactDOM from 'react-dom'
import 'bulma/css/bulma.css'
import './index.css'
import App from './App'
import {getInventory, setInventory} from './inventory.js'
import registerServiceWorker from './registerServiceWorker'

function fetchFailed () {
  console.error('Uh-oh - fetching initial inventory.json failed!')
}

// C. Oakman
// Fetch an initial default inventory from public/data/inventory.json if it does
// not already exist in localStorage.
// Note that this would normally come from your backend: node.js + express, python, php, etc
if (!getInventory()) {
  window.fetch('data/inventory.json')
    .then(function (response) { return response.json() })
    .then(setInventory)
    .then(startRendering)
    .catch(fetchFailed)
} else {
  startRendering()
}

// C. Oakman
// This is the entrypoint into our application.
// We are telling the App component to render into the real DOM element with id "root"
// From here on out, everything inside the DOM is managed by the React library and
// our component definitions.
function startRendering () {
  ReactDOM.render(<App />, document.getElementById('root'))
}

registerServiceWorker()
