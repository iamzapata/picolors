import piDecimals from 'utils/piMillionDecimals'

describe('piDigits', () => {
  it('matches snapshot', () => {
    expect(piDecimals).toMatchSnapshot()
  })
})
