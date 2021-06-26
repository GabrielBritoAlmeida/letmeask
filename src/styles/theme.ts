import { extendTheme } from '@chakra-ui/react'

export const theme = extendTheme({
  fonts: {
    heading: 'Roboto',
    body: 'Roboto'
  },

  styles: {
    global: {
      body: {
        bg: '#f8f8',
        color: '#29292e'
      }
    }
  }
})
