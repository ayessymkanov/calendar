import React from 'react'

export default class RequireAuth extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      loggedIn: localStorage.getItem('user') ? true : false
    }
  }
  componentWillMount () {
    if (!this.state.loggedIn) {
      this.props.history.push('/')
    }
  }
  render () {
    return this.state.loggedIn ? this.props.children : null
  }
}
