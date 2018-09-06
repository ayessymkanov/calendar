import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Main from './components/main'
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
      {/* <Route path='/signup' component={Signup} />
      <Route path='/explanation' component={Explanation} />
      <Route path='/waiting' component={requireAuth(Waiting)} />
      <Route path='/share' component={requireAuth(ShareScreen)} />
      <Route path='/notify' component={requireAuth(Notify)} />
      <Route path='/' component={NotFound} /> */}
    </Switch>
  </BrowserRouter>
)
