import pastelizeColor from 'utils/pastelizeColor'

describe('pastelizeColor', () => {
  it('returns a pastel version of a color', () => {
    expect(pastelizeColor('red')).toEqual({
      b: 189.97500000000002,
      g: 189.97500000000002,
      r: 243.52499999999995,
    })

    expect(pastelizeColor('lime')).toEqual({
      b: 189.97500000000002,
      g: 243.52499999999995,
      r: 189.97500000000002,
    })

    expect(pastelizeColor('blue')).toEqual({
      b: 243.52499999999995,
      g: 189.97500000000002,
      r: 189.97500000000002,
    })
  })
})
