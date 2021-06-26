import { ChakraProvider } from '@chakra-ui/react'
import { Home } from 'pages/Home'
import { theme } from 'styles/theme'

export function App() {
  return (
    <ChakraProvider theme={theme}>
      <Home />
    </ChakraProvider>
  )
}
