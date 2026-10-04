import { describe, it, expect } from 'vitest'
import { APPS } from './apps'

describe('APPS', () => {
  it('has exactly 5 apps with every required field', () => {
    expect(APPS).toHaveLength(5)
    for (const app of APPS) {
      expect(app.id).toBeTruthy()
      expect(app.name).toBeTruthy()
      expect(app.description).toBeTruthy()
      expect(app.icon).toBeTruthy()
      expect(app.tag).toBeTruthy()
    }
  })
})
