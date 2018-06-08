import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const jimmyState = {
  "name": "Jimmy",
  "email": "jimmy@yahoo.com",
  "password1": "abc123",
  "password2": "abc123",
  "isSubmitting": false,
  "errorsShowing": false,
  "successShowing": false,
  "errors": []
}

const jenniferState = {
  "name": "Jennifer",
  "email": "jenny@yahoo.com",
  "password1": "123abc",
  "password2": "123abc",
  "isSubmitting": false,
  "errorsShowing": false,
  "successShowing": true,
  "errors": []
}

const rootEl = document.getElementById('root')
const rootEl2 = document.getElementById('root2')

ReactDOM.render(React.createElement(App, jimmyState), rootEl);
ReactDOM.render(React.createElement(App, jenniferState), rootEl2);

registerServiceWorker();
