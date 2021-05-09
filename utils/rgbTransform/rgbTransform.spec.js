import rgbTransform from './index'

describe('rgbTransform', () => {
  it('returns an object with r, g and b properties set to corresponding 0-255 values', () => {
    expect(rgbTransform('black')).toEqual({ r: 0, g: 0, b: 0 })
    expect(rgbTransform('red')).toEqual({ r: 255, g: 0, b: 0 })
    expect(rgbTransform('lime')).toEqual({ r: 0, g: 255, b: 0 })
    expect(rgbTransform('blue')).toEqual({ r: 0, g: 0, b: 255 })
    expect(rgbTransform('yellow')).toEqual({ r: 255, g: 255, b: 0 })
    expect(rgbTransform('white')).toEqual({ r: 255, g: 255, b: 255 })
  })
})
