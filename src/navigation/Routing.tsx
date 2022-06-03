// REACT IMPORTS
import React, { ReactElement } from 'react'
import { Route, Switch } from 'react-router'

// PROJECT IMPORTS
import Landing from '@pages/Landing'
import { LANDING } from '@navigation/CONSTANTS'

// ===========================|| ROUTING ||=========================== //

export const Routing = (): ReactElement => {
  return (
    <Switch>
      <Route exact path={LANDING}>
        <Landing />
      </Route>
    </Switch>
  )
}
