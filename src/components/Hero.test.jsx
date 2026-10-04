import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import Hero from './Hero'

describe('Hero', () => {
  it('renders the headline and a download CTA', () => {
    render(<Hero />)
    expect(
      screen.getByRole('heading', { name: /ultimate tool for everyday work/i })
    ).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /download for windows/i })).toBeInTheDocument()
  })

  it('isolates its own stacking context so the negative-z glow renders above the page background', () => {
    const { container } = render(<Hero />)
    const section = container.querySelector('section')
    expect(section.className).toContain('isolate')
  })
})
