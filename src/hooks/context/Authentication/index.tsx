import { useState, createContext, ReactNode, useContext } from 'react'

type AuthenticationProviderPros = {
  children: ReactNode
}

type AuthenticationValueProps = {
  isAuthentication: boolean
  setIsAuthentication: (isAuthentication: boolean) => void
}

const AuthenticationContext = createContext({} as AuthenticationValueProps)

export function AuthenticationProvider({
  children
}: AuthenticationProviderPros) {
  const [isAuthentication, setIsAuthentication] = useState(false)

  return (
    <AuthenticationContext.Provider
      value={{ isAuthentication, setIsAuthentication }}
    >
      {children}
    </AuthenticationContext.Provider>
  )
}

export function useAuthentication() {
  return useContext(AuthenticationContext)
}
