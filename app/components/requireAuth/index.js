import React from 'react'

export default class RequireAuth extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      loggedIn: localStorage.getItem('loggedIn')
    }
  }
  componentWillMount () {
    if (this.state.loggedIn !== 'true') {
      this.props.history.push('/')
    }
  }
  render () {
    return this.state.loggedIn ? this.props.children : null
  }
}
