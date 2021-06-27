import { BrowserRouter, Route } from 'react-router-dom'
import { Home } from 'pages/Home'
import { NewRoom } from 'pages/NewRoom'

import { useAuthentication } from 'hooks/context/Authentication'

export function Routes() {
  const { isAuthentication } = useAuthentication()

  if (!isAuthentication) return <Home />

  return (
    <BrowserRouter>
      <Route path="/" exact component={Home} />
      <Route path="/rooms/new" component={NewRoom} />
    </BrowserRouter>
  )
}
