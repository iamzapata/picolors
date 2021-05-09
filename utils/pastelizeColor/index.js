const Color = require('color')

const pastelizeColor = (color) => {
  const colorConstructor = Color(color)
  const [h, s, l] = Color(colorConstructor).hsl().color
  const pastelSaturation = s < 25 ? 25 : s > 70 ? 70 : s
  const pasteLightness = l < 85 ? 85 : s > 95 ? 95 : s

  const pastelColorString = `hsl(${h}, ${pastelSaturation}%, ${pasteLightness}%)`

  const [r, g, b] = Color(pastelColorString).rgb().color

  return { r, g, b }
}

export default pastelizeColor
