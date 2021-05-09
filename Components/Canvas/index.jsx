import React, { useEffect, useRef } from "react"
import { number } from "prop-types"
import piDecimals from "utils/piMillionDecimals"

const Canvas = ({ colorMap, width, height }) => {
  const canvasRef = useRef()

  const drawScreen = () => {
    const dpr = window.devicePixelRatio

    const canvas = canvasRef.current
    const context = canvas.getContext("2d")

    const { width: canvasWidth, height: canvasHeight } = canvas

    const imageData = context.getImageData(0, 0, canvasWidth, canvasHeight)

    // The data property contains a one dimensional Uint8ClampedArray (each value is campled to a value between 0-255)
    // The Uint8ClampedArray contains height × width × 4 bytes of data, with index values ranging from 0 to (height×width×4)-1.
    // Each pixel is represented by four one-byte values (red, green, blue, and alpha, in that order; "RGBA" format).
    // Each color component is represented by an integer between 0 and 255.  Each component is assigned a consecutive
    // index within the array, with the top left pixel's red component being at index 0 within the array.
    // Pixels then proceed from left to right, then downward, throughout the array.
    const imagePixels = imageData.data

    const piDecimalDigits = piDecimals.split("")
    let piDecimalPosition = 0

    for (
      let index = 0;
      index < canvasHeight * canvasWidth * 4 - 1;
      index += 4
    ) {
      const piDecimal = piDecimalDigits[piDecimalPosition]
      const { r, g, b } = colorMap[piDecimal]

      imagePixels[index] = r
      imagePixels[index + 1] = g
      imagePixels[index + 2] = b
      imagePixels[index + 3] = 255

      piDecimalPosition++
    }

    context.putImageData(imageData, 0, 0)
  }

  // High DPR Canvas
  const setResolution = (canvas) => {
    const dpr = window.devicePixelRatio || 1

    canvas.style.width = canvas.width + "px"
    canvas.style.height = canvas.height + "px"

    canvas.width *= dpr
    canvas.height *= dpr

    const context = canvas.getContext("2d")
    context.scale(dpr, dpr)
  }

  useEffect(() => {
    drawScreen()
  }, [colorMap])

  useEffect(() => {
    if (canvasRef.current) {
      // setResolution(canvasRef.current)
    }
  }, [canvasRef.current])

  return <canvas width={width} height={height} ref={canvasRef} />
}

Canvas.propTypes = {
  width: number.isRequired,
  height: number.isRequired,
}

export default Canvas
