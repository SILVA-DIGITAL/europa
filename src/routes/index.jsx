/* eslint-disable */
import React from 'react'
import { Router, Switch, Route } from 'wouter'
import Loader from '../components/Loader'

// import { routes } from '../constants/routes'

export function Routes() {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <></>
        </Route>
      </Switch>
    </Router>
  )
}

export default Routes
