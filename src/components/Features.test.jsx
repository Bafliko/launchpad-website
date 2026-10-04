import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import Features from './Features'
import { APPS } from '../data/apps'

describe('Features', () => {
  it('renders one card per app with the correct icon path', () => {
    render(<Features />)
    for (const app of APPS) {
      const name = screen.getByText(app.name)
      expect(name).toBeInTheDocument()
      const icon = name.closest('div').querySelector('img')
      expect(icon).toHaveAttribute('src', app.icon)
    }
  })
})
