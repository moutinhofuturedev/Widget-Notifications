import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { NewWidget } from './NewWidget'

describe('<NewWidget />', () => {
  it('should render by default on the page', () => {
    render(<NewWidget />)

    const notification = screen.getByText(/notificações/i)
    const button = screen.getByRole('button', {
      name: /marcar todas como vistas/i,
    })

    expect(notification).toBeInTheDocument()
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
})
