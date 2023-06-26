import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { NewWidget } from './NewWidget'

describe('<NewWidget />', () => {
  it('should render by default on the page', () => {
    render(<NewWidget />)

    const notification = screen.getByText(/notificações/i)
    const recents = screen.getByText(/recentes/i)
    const button = screen.getByRole('button', {
      name: /marcar todas como vistas/i,
    })

    expect(notification).toBeInTheDocument()
    expect(recents).toBeInTheDocument()
    expect(button).toBeInTheDocument()
  })

  it('should test clicks which buttons', () => {
    render(<NewWidget />)

    const checkButton = screen.getByTestId('check-list')
    const xButton = screen.getByTestId('x')
    const check = screen.getByTestId('check')

    waitFor(() => {
      userEvent.click(checkButton)
      userEvent.click(xButton)
      userEvent.click(check)
    })
  })

  it('should test styles in component', () => {
    render(<NewWidget />)

    const paragraph = screen.getByTestId('p')

    expect(paragraph).toHaveStyle({
      'font-size': 'text-sm',
      color: 'text-zinc-900',
    })
  })
})
