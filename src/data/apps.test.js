import { existsSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { dirname, resolve } from 'node:path'
import { describe, it, expect } from 'vitest'
import { APPS } from './apps'

const here = dirname(fileURLToPath(import.meta.url))

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

  it('icon paths are relative (so they resolve under the GitHub Pages subpath) and point to a real file', () => {
    for (const app of APPS) {
      expect(app.icon.startsWith('/')).toBe(false)
      const filePath = resolve(here, '../../public', app.icon)
      expect(existsSync(filePath)).toBe(true)
    }
  })
})
