import charOcurrenceCount from 'utils/charOcurrenceCount'
import piDecimals from 'utils/piMillionDecimals'

describe('charOcurrenceCount', () => {
  it('counts number of characters in a string', () => {
    expect(charOcurrenceCount('abb9cdddddabcjahahwias1991119XXXXX....', 9)).toEqual(4)
    expect(charOcurrenceCount('....', 9)).toEqual(0)
    expect(charOcurrenceCount('_________', '_')).toEqual(9)
    const twentyMillionCaracters =
      piDecimals +
      piDecimals +
      piDecimals +
      piDecimals +
      piDecimals +
      piDecimals +
      piDecimals +
      piDecimals +
      piDecimals +
      piDecimals +
      piDecimals +
      piDecimals +
      piDecimals +
      piDecimals +
      piDecimals +
      piDecimals +
      piDecimals +
      piDecimals +
      piDecimals +
      piDecimals
    // Takes around 3s to run
    expect(charOcurrenceCount(twentyMillionCaracters)).toEqual(20000001)
  })
})
