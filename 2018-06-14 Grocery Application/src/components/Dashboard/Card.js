import React, { Component } from 'react'

class Card extends Component {
  // C. Oakman
  // If you need to reference props in the constructor, pass them in like this
  // and be sure to pass them to super(props) as well.
  constructor (props) {
    super(props)

    // C. Oakman
    // Every Card should have a unique ID. We will use that

    // C. Oakman
    // We will track if the card is collapsed or not here.
    this.state = {
      isCollapsed: false
    }
  }

  toggleCollapse () {
    // C. Oakman
    // You can use a function to apply setState like below. The function is
    // passed the current state.
    this.setState(function (prevState) {
      return {isCollapsed: !prevState.isCollapsed}
    })
  }

  render () {
    const upOrDown = this.state.isCollapsed ? '⏷' : '⏶'

    let body = null
    if (!this.state.isCollapsed) {
      body = <div className='card-content'>
        <div className='content'><this.props.bodyComponent /></div>
      </div>
    }

    return (
      <div className='card'>
        <header className='card-header'>
          <p className='card-header-title'>{this.props.title}</p>
          <span className='card-header-icon' onClick={() => this.toggleCollapse()}>
            {upOrDown}
          </span>
        </header>
        {/* C. Oakman - things with value of null do not render at all */}
        {body}
      </div>
    )
  }
}

export default Card
