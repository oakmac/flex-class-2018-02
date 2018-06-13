import React from 'react'
import ReactDOM from 'react-dom'
import 'bulma/css/bulma.css'
import 'font-awesome/css/font-awesome.css'
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
