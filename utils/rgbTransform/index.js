const Color = require('color')

const rgbTransform = (color) => {
  const [r, g, b] = Color(color).rgb().color
  return {
    r,
    g,
    b,
  }
}

export default rgbTransform
