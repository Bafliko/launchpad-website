import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import Pricing from './Pricing'

describe('Pricing', () => {
  it('renders the price and trial CTA', () => {
    render(<Pricing />)
    expect(screen.getAllByText(/₪9\.99/).length).toBeGreaterThan(0)
    expect(screen.getByRole('link', { name: 'Start free trial' })).toBeInTheDocument()
  })
})
