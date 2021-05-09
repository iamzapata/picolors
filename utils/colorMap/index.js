import rgbTransform from 'utils/rgbTransform'
import pastelizeColor from 'utils/pastelizeColor'

const colors = [
  'blue',
  'red',
  'purple',
  'pink',
  'green',
  'black',
  'orange',
  'yellow',
  'cyan',
  'silver',
].map(rgbTransform)

const greyColors = [
  'gainsboro',
  'lightgray',
  'silver',
  'darkgray',
  'dimgray',
  'lightgray',
  'lightslategray',
  'slategray',
  'darkslategray',
  'black',
].map(rgbTransform)

const brownColors = [
  'sandybrown',
  'goldenrod',
  'darkgoldenrod',
  'peru',
  'chocolate',
  'olive',
  'saddlebrown',
  'sienna',
  'brown',
  'maroon',
].map(rgbTransform)

const pastelColors = colors.map((color) => pastelizeColor(color))

const regular = Object.assign({ type: 'regular' }, { colors: colors })

const grey = Object.assign({ type: 'gray' }, { colors: greyColors })

const brown = Object.assign({ type: 'brown' }, { colors: brownColors })

const pastel = Object.assign({ type: 'pastel' }, { colors: pastelColors })

export { brown, grey, pastel, regular }
