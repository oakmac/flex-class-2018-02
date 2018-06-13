import React, { Component } from 'react'
import Card from './Dashboard/Card.js'

function Foo () {
  return (
    <div>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut egestas et est ac aliquet. Vivamus sit amet sapien aliquam, molestie ex at, fringilla magna. Nullam tincidunt neque vitae nulla egestas mollis id a ligula. Aenean sed efficitur ante, mattis accumsan sem. Interdum et malesuada fames ac ante ipsum primis in faucibus. Proin congue lacus id dolor gravida condimentum. Sed congue diam lorem, in posuere purus gravida in. Vestibulum luctus vitae eros ut posuere. Fusce tincidunt lacus in aliquet pellentesque.</p>
    </div>
  )
}

function Bar () {
  return (
    <p>Bar</p>
  )
}

class Dashboard extends Component {
  render () {
    return (
      <section className='dashboard-section'>
        <Card id='fruitsCard' title='Fruits' bodyComponent={Foo} />
        <Card id='meatsCard' title='Meats' bodyComponent={Bar} />
        <Card id='dairyCard' title='Dairy' bodyComponent={Foo} />
        <Card id='bakeryCard' title='Bakery' bodyComponent={Foo} />
        {/* add more cards here as appropriate... */}
      </section>

    )
  }
}

export default Dashboard
