import { render, screen } from '@testing-library/react'
import Home from './page'

describe('<Home />', () => {
  it('should test styles on the page', () => {
    render(<Home />)

    const backGround = screen.getByTestId('back-ground')

    expect(backGround).toHaveStyle({
      'background-color': 'bg-black',
    })
  })
})
