import { render, screen } from '@testing-library/react'

import { Error } from '.'

describe('Error', () => {
  it('should render correctly', async () => {
    render(<Error error={'Erro ao realizar login'} />)

    const errorMessage = await screen.findByTestId('error')

    expect(errorMessage).toBeInTheDocument()

    expect(errorMessage).toHaveTextContent('Erro ao realizar login')
  })
})
