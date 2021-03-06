import React, { useState, useRef } from "react"
import { ChromePicker } from "react-color"

const Color = require("color")

import classNames from "classnames"

const ColorSelector = ({ handleChange, rgb, index, originalColor }) => {
  const [activeItemIndex, setActiveItemIndex] = useState(null)
  const activeColorOption = useRef(0)

  const backgroundColor = Color(rgb).hex()
  const color = Color(rgb).isDark() ? "white" : "black"

  const colorOptions = [
    { r: 255, g: 255, b: 255 },
    { r: 0, g: 0, b: 0 },
    originalColor,
  ]

  const popover = {
    position: "absolute",
    zIndex: "2",
  }
  const cover = {
    position: "fixed",
    top: "0px",
    right: "0px",
    bottom: "0px",
    left: "0px",
  }

  const handleClick = (index) => {
    return (event) => {
      // shift + click to cycle between white, black and original color
      if (event.shiftKey) {
        handleChange(index, colorOptions[activeColorOption.current])

        activeColorOption.current += 1
        if (activeColorOption.current === colorOptions.length) {
          activeColorOption.current = 0
        }

        return
      }

      setActiveItemIndex(index)
    }
  }

  const handleColorChange = (color) => {
    delete color.rgb.a
    handleChange(activeItemIndex, color.rgb)
  }

  const handleClose = () => {
    setActiveItemIndex(null)
  }

  return (
    <div className="ColorSelector position-relative d-flex flex-column align-items-center">
      <button
        id={`color-${index}`}
        className={classNames(
          "btn m-1 p-1 d-flex align-items-center justify-content-center position-relative",
          backgroundColor === "#FFFFFF" && "border border-dark"
        )}
        style={{ backgroundColor, color, height: "30px", width: "30px" }}
        onClick={handleClick(index)}
      >
        {index}
      </button>

      {activeItemIndex === index && (
        <div className="position-absolute" style={popover}>
          <div style={cover} onClick={handleClose} />
          <ChromePicker
            onChange={handleColorChange}
            color={backgroundColor}
            disableAlpha
          />
        </div>
      )}
    </div>
  )
}

export default ColorSelector
