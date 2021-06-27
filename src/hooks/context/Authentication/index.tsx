import { useMemo } from 'react'
import { useState, createContext, ReactNode, useContext } from 'react'
import { auth, firebase } from 'services/firebase'

type UserProps = {
  id: string
  name: string
  avatar: string
}

type AuthenticationProviderPros = {
  children: ReactNode
}

type AuthenticationValueProps = {
  isAuthentication: boolean
  setIsAuthentication: (isAuthentication: boolean) => void
  signWithGoogle: () => Promise<boolean>
  user: UserProps | undefined
}

const AuthenticationContext = createContext({} as AuthenticationValueProps)

export function AuthenticationProvider({
  children
}: AuthenticationProviderPros) {
  const [isAuthentication, setIsAuthentication] = useState(() => {
    const storage = localStorage.getItem('isAuthenticationLetmeask')
    if (storage) {
      const authentication = JSON.parse(storage)
      return authentication
    } else {
      return false
    }
  })
  const [user, setUser] = useState<UserProps>()

  useMemo(() => {
    localStorage.setItem(
      'isAuthenticationLetmeask',
      JSON.stringify(isAuthentication)
    )
  }, [isAuthentication])

  async function signWithGoogle() {
    const provider = new firebase.auth.GoogleAuthProvider()

    const response = await auth.signInWithPopup(provider)

    if (response.user) {
      const { displayName, photoURL, uid } = response.user

      if (!displayName || !photoURL) {
        throw new Error('Missing information from Google Account')
      }

      setUser({
        id: uid,
        name: displayName,
        avatar: photoURL
      })

      setIsAuthentication(true)
      return true
    } else {
      setIsAuthentication(false)
      return false
    }
  }

  return (
    <AuthenticationContext.Provider
      value={{ isAuthentication, setIsAuthentication, signWithGoogle, user }}
    >
      {children}
    </AuthenticationContext.Provider>
  )
}

export function useAuthentication() {
  return useContext(AuthenticationContext)
}
