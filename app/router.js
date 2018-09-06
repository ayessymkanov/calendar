import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Login from './components/login'
import Calendar from './components/calendar'
import RequireAuth from './components/requireAuth'

const requireAuth = Component => props => (
  <RequireAuth {...props}>
    <Component {...props} />
  </RequireAuth>
)

export default () => (
  <BrowserRouter>
    <Switch>
      <Route exact path='/' component={Login} />
      <Route exact path='/calendar' component={requireAuth(Calendar)} />
    </Switch>
  </BrowserRouter>
)
