import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import WhyLaunchPad from './WhyLaunchPad'

describe('WhyLaunchPad', () => {
  it('renders all three value props', () => {
    render(<WhyLaunchPad />)
    expect(screen.getByText('Offline-first')).toBeInTheDocument()
    expect(screen.getByText('One license')).toBeInTheDocument()
    expect(screen.getByText('Always current')).toBeInTheDocument()
  })
})
