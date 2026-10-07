import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import Footer from './Footer'

describe('Footer', () => {
  it('renders the company copyright line', () => {
    render(<Footer />)
    expect(screen.getByText(/איי.סייפטי/)).toBeInTheDocument()
  })

  it('renders the legal documents', () => {
    render(<Footer />)
    for (const name of ['Terms of Use', 'User Agreement (EULA)', 'Privacy Policy']) {
      expect(screen.getByText(name)).toBeInTheDocument()
    }
  })
})
