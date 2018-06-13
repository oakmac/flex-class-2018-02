import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import registerServiceWorker from './registerServiceWorker'

// C. Oakman
// This is the entrypoint into our application.
// We are telling the App component to render into the real DOM element with id "root"
// From here on out, everything inside the DOM is managed by the React library and
// our component definitions.
ReactDOM.render(<App />, document.getElementById('root'))

registerServiceWorker()
