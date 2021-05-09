const Color = require('color')

const rgbTransform = (color) => {
  const [r, g, b] = Color(color).rgb().color
  return {
    r,
    g,
    b
  }
}

const pastelizeColor = (color) => {
  const colorConstructor = Color(color)
  const [h, s, l] = Color(colorConstructor).hsl().color
  const pastelSaturation = s < 25 ? 25 : s > 70 ? 70 : s
  const pasteLightness = l < 85 ? 85 : s > 95 ? 95 : s

  const pastelColorString = `hsl(${h}, ${pastelSaturation}%, ${pasteLightness}%)`

  const [r, g, b] = Color(pastelColorString).rgb().color

  return { r, g, b }
}

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
  'silver'
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
  'black'
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
  'maroon'
].map(rgbTransform)

const pastelColors = colors.map((color) => pastelizeColor(color))

const regular = Object.assign({ type: 'regular' }, { colors: colors })

const grey = Object.assign({ type: 'gray' }, { colors: greyColors })

const brown = Object.assign({ type: 'brown' }, { colors: brownColors })

const pastel = Object.assign({ type: 'pastel' }, { colors: pastelColors })

export { brown, grey, pastel, regular }
