import React, { Component } from 'react'

// C. Oakman
// Defines a navigation link. Receives:
// props.activeRoute
// props.label
// props.route
//
// It would be fine to put this component into it's own file instead of having
// it here alongside NavBar. Matter of preference.
function NavLink (props) {
  const liClassName = (props.route === props.activeRoute) ? 'is-active' : ''
  const href = '#' + props.route

  return (
    <li className={liClassName}>
      <a href={href}>{props.label}</a>
    </li>
  )
}

// C. Oakman
// A simple functional component that defines our Navigation bar. Note that the
// only information this component needs to render is "What is the active route?"
// Passed in as props.activeRoute from the parent component.
function NavBar (props) {
  return (
    <nav className='tabs is-boxed'>
      <ul>
        <NavLink label='Home' route='/home' activeRoute={props.activeRoute} />
        <NavLink label='Dashboard' route='/dashboard' activeRoute={props.activeRoute} />
        <NavLink label='Groceries' route='/groceries' activeRoute={props.activeRoute} />
      </ul>
    </nav>
  )
}

// C. Oakman
// Note that we only need to export NavBar here. NavLink is private to this module.
export default NavBar
