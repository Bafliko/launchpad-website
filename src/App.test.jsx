import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect, beforeEach } from 'vitest'
import App from './App'

describe('App', () => {
  beforeEach(() => localStorage.clear())

  it('renders every section in Hebrew, right-to-left, by default', () => {
    render(<App />)
    expect(document.documentElement.dir).toBe('rtl')
    expect(screen.getByRole('banner')).toHaveTextContent('LaunchPad')
    expect(screen.getByRole('heading', { name: /כל הכלים לעבודה היומיומית/ })).toBeInTheDocument()
    expect(screen.getByText('PDF Forge')).toBeInTheDocument()
    expect(screen.getByText('עובד בלי אינטרנט')).toBeInTheDocument()
    expect(screen.getAllByText(/₪9\.99/).length).toBeGreaterThan(0)
    expect(screen.getByText(/Bafliko/)).toBeInTheDocument()
  })

  it('switches to English and remembers the choice', () => {
    const { unmount } = render(<App />)
    fireEvent.click(screen.getByRole('button', { name: 'Switch to English' }))
    expect(document.documentElement.dir).toBe('ltr')
    expect(
      screen.getByRole('heading', { name: /ultimate tool for everyday work/i })
    ).toBeInTheDocument()
    expect(screen.getByText('Offline-first')).toBeInTheDocument()
    unmount()
    render(<App />)
    expect(screen.getByText('Offline-first')).toBeInTheDocument()
  })
})
