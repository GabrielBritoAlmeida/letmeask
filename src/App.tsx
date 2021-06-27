import { Routes } from 'routers/routes'
import { ChakraProvider } from '@chakra-ui/react'
import { AuthenticationProvider } from 'hooks/context/Authentication'

import { theme } from 'styles/theme'

export function App() {
  return (
    <ChakraProvider theme={theme}>
      <AuthenticationProvider>
        <Routes />
      </AuthenticationProvider>
    </ChakraProvider>
  )
}
