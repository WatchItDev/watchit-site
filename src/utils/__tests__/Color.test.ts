import { Color } from '@src/utils'

describe('Color util', () => {
  it('should return valid random hex color ', () => {
    const alphaColor = Color.addAlpha('#999999', 0.5)
    expect(alphaColor).toBe('#99999980')
  })

  it('should return valid hex color', () => {
    const randomColor = Color.getRandomColor()

    expect(/^#[0-9A-F]{6}$/i.test(randomColor)).toBeTruthy()
  })
})
