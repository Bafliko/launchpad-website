import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import Footer from './Footer'

describe('Footer', () => {
  it('renders the Bafliko copyright line', () => {
    render(<Footer />)
    expect(screen.getByText(/Bafliko/)).toBeInTheDocument()
  })
})
