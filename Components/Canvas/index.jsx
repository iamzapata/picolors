import React, { useEffect, useRef } from "react"
import { number } from "prop-types"
import piDecimals from "utils/piMillionDecimals"

const Canvas = ({ colorMap, width, height }) => {
  const canvasRef = useRef()

  useEffect(() => {
    drawScreen()
  }, [colorMap])

  const drawScreen = () => {
    const canvas = canvasRef
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
        const { r, g, b } = colorMap[piDecimal]
        imagePixels[index] = r
        imagePixels[index + 1] = g
        imagePixels[index + 2] = b
        imagePixels[index + 3] = 255
        piDecimalPosition++
      }
    }
    context.putImageData(imageData, 0, 0)
  }

  return <canvas width={width} height={height} ref={canvasRef} />
}

Canvas.propTypes = {
  width: number.isRequired,
  height: number.isRequired,
}

export default Canvas
