import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

function SuccessPage (props) {
  return (
    <div id="successMessage">
        <h3>Success!</h3>
        <p>We just sent you a bunch of sign-up emails. Please check your email.</p>
        <p><button className="big-btn" onClick={props.showTheForm}>Ok</button></p>
    </div>
  )
}

function TextInput (props) {
  return (
    <div className="input-row">
        <label>{props.label}</label>
        <input type={props.inputType} value={props.value} />
    </div>
  )
}

function submitForm (evt) {
  evt.preventDefault()
}

function Form (props) {
  return (
    <form onSubmit={submitForm}>
        <TextInput label="Name" value={props.name} inputType="text" />
        <TextInput label="Email" value={props.email} inputType="text" />
        <TextInput label="Password" value={props.password1} inputType="password" />
        <TextInput label="Password (again)" value={props.password2} inputType="password" />
        <div className="action-row">
            <input onClick={props.showSuccessPage} type="submit" value="Submit" className="big-btn" />
        </div>
    </form>
  )
}

class App extends Component {
  constructor (props) {
    super(props)

    this.state = {
      name: '',
      email: '',
      password1: '',
      password2: '',
      successShowing: false
    }
  }

  showSuccessPage() {
    this.setState({successShowing: true})
  }

  showTheForm () {
    this.setState({successShowing: false})
  }

  componentDidUpdate () {
    console.log(JSON.stringify(this.state, null, 2))
    console.log('~~~~~~~~~~~~~~~~~~~')
  }

  render() {
    const showTheFormBoundInTheObject = this.showTheForm.bind(this)

    return (
      <main>
        <h2>Our Form in React.js</h2>
        {this.state.successShowing
          ? <SuccessPage showTheForm={showTheFormBoundInTheObject} />
          : <Form {...this.state} showSuccessPage={() => this.showSuccessPage() } />}
      </main>
    )
  }
}

export default App;
