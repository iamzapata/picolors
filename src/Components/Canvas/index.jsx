import React, { PureComponent } from "react"
import { number } from "prop-types"
import piDecimals from "utils/piMillionDecimals"

class Canvas extends PureComponent {
  constructor(props) {
    super(props)
    this.canvas = React.createRef()
  }

  componentDidMount() {
    this.drawScreen()
  }

  componentDidUpdate() {
    this.drawScreen()
  }

  drawScreen = () => {
    const { colorMap } = this.props
    window.pi = piDecimals
    const canvas = this.canvas
    const context = canvas.current.getContext("2d")

    const { width: canvasWidth, height: canvasHeight } = canvas.current

    const imageData = context.getImageData(0, 0, canvasWidth, canvasHeight)

    const imagePixels = imageData.data

    const piDecimalDigits = piDecimals.split("")
    let piDecimalPosition = 0

    for (let row = 0; row < canvasHeight; row++) {
      for (let col = 0; col < canvasWidth; col++) {
        const index = (col + row * imageData.width) * 4
        const piDecimal = piDecimalDigits[piDecimalPosition]
        imagePixels[index] = colorMap[piDecimal].r
        imagePixels[index + 1] = colorMap[piDecimal].g
        imagePixels[index + 2] = colorMap[piDecimal].b
        imagePixels[index + 3] = 255
        piDecimalPosition++
      }
    }
    context.putImageData(imageData, 0, 0)
  }

  render() {
    const { width, height } = this.props
    return <canvas width={width} height={height} ref={this.canvas} />
  }
}

Canvas.propTypes = {
  width: number.isRequired,
  height: number.isRequired
}

export default Canvas
