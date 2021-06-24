import { render, screen } from '@testing-library/react'
import { App } from './App'

test('renders learn react link', () => {
  const { debug } = render(<App />)
  const linkElement = screen.getByText(/new project!/i)

  expect(linkElement).toBeInTheDocument()

  debug()

  screen.logTestingPlaygroundURL()
})
