import { render, screen } from '@testing-library/react'

import { Pagination } from '.'

describe('Pagination', () => {
  it('should render previous button', async () => {
    render(<Pagination />)

    const previousButton = await screen.findByTestId('previousButton')

    expect(previousButton).toBeInTheDocument()

    expect(previousButton).toHaveAttribute('type', 'button')
  })

  it('should render next button', async () => {
    render(<Pagination />)

    const nextButton = await screen.findByTestId('nextButton')

    expect(nextButton).toBeInTheDocument()

    expect(nextButton).toHaveAttribute('type', 'button')
  })

  it('should render the current page equals 1', async () => {
    render(<Pagination />)

    const currentPage = await screen.findByText('1')

    expect(currentPage).toBeInTheDocument()
  })
})
