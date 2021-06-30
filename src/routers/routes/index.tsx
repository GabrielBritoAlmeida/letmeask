import { BrowserRouter, Route, Switch } from 'react-router-dom'

import { Home } from 'pages/Home'
import { NewRoom } from 'pages/NewRoom'
import { Room } from 'pages/Room'
import { NotAuthentication } from 'pages/NotAuthentication'

import { useAuthentication } from 'hooks/context/Authentication'

export function Routes() {
  const { isAuthentication, user } = useAuthentication()

  if (!isAuthentication || !user)
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/rooms/:id" exact component={Room} />
          <Route component={NotAuthentication} />
        </Switch>
      </BrowserRouter>
    )

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/rooms/new" exact component={NewRoom} />
        <Route path="/rooms/:id" exact component={Room} />
      </Switch>
    </BrowserRouter>
  )
}
