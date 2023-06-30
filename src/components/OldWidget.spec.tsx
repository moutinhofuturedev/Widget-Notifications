import { render, screen, waitFor } from '@testing-library/react'
import OldWidget from './OldWidget'
import userEvent from '@testing-library/user-event'

describe('<OldWidget />', () => {
  it('should render by default on the page', () => {
    render(<OldWidget />)

    const olds = screen.getByText(/antigas/i)

    expect(olds).toBeInTheDocument()
  })

  it('should test clicks which buttons', () => {
    render(<OldWidget />)

    const trashButton = screen.getByTestId('trash')

    waitFor(() => {
      userEvent.click(trashButton)
    })

    expect(trashButton).toBeInTheDocument()
  })

  it('should test styles in component', () => {
    render(<OldWidget />)

    const paragraph = screen.getByTestId('p')
    const trashButton = screen.getByTestId('trash')

    expect(paragraph).toHaveStyle({
      'font-size': 'ext-sm',
      color: 'text-zinc-500',
    })

    expect(trashButton).toHaveStyle({
      display: 'inline-block',
    })
  })
})
