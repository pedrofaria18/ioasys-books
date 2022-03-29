import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { Form } from '.'

describe('Form', () => {
  it('should render correctly', () => {
    const { container } = render(<Form />)

    expect(container).toMatchSnapshot()
  })

  it('should render the email and password input', async () => {
    render(<Form />)

    const emailInput = await screen.findByLabelText('Email')
    const passwordInput = await screen.findByLabelText('Senha')

    expect(emailInput).toBeInTheDocument()
    expect(passwordInput).toBeInTheDocument()

    expect(emailInput).toHaveAttribute('type', 'email')
    expect(passwordInput).toHaveAttribute('type', 'password')

    userEvent.type(emailInput, 'desafio@ioasys.com.br')
    userEvent.type(passwordInput, '12341234')

    expect(emailInput).toHaveValue('desafio@ioasys.com.br')
    expect(passwordInput).toHaveValue('12341234')
  })

  it('should render the submit button', async () => {
    render(<Form />)

    const submitButton = await screen.findByText('Entrar')

    expect(submitButton).toBeInTheDocument()
    expect(submitButton).toHaveAttribute('type', 'submit')
  })
})
