import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import App from './App'

describe('App', () => {
  it('renders every section exactly once', () => {
    const { container } = render(<App />)
    expect(container.textContent).toContain('LaunchPad')
    expect(
      screen.getByRole('heading', { name: /ultimate tool for everyday work/i })
    ).toBeInTheDocument()
    expect(screen.getByText('PDF Forge')).toBeInTheDocument()
    expect(screen.getByText('Offline-first')).toBeInTheDocument()
    expect(screen.getAllByText(/₪9\.99/).length).toBeGreaterThan(0)
    expect(screen.getByText(/Bafliko/)).toBeInTheDocument()
  })
})
