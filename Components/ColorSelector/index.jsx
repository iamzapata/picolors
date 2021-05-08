import React, { useState } from "react"
import { ChromePicker } from "react-color"
import piDecimals from "utils/piMillionDecimals"

const Color = require("color")

const ColorSelector = ({ handleChange, rgb, index }) => {
  const [activeItemIndex, setActiveItemIndex] = useState(null)

  const backgroundColor = Color(rgb).hex()
  const color = Color(rgb).isDark() ? "white" : "black"

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

  const handleClick = (newActiveItemIndex) => {
    return () => {
      setActiveItemIndex(newActiveItemIndex)
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
        className={`btn rounded-circle m-1 p-1 d-flex align-items-center justify-content-center position-relative ${
          backgroundColor === "#FFFFFF" && "border border-dark"
        }`}
        id={`color-${index}`}
        style={{ backgroundColor, color, height: "30px", width: "30px" }}
        onClick={handleClick(index)}
      >
        {index}
      </button>

      {activeItemIndex === index && (
        <div className="position-absolute" style={popover}>
          <div style={cover} onClick={handleClose} />
          <ChromePicker onChange={handleColorChange} color={backgroundColor} />
        </div>
      )}
    </div>
  )
}

export default ColorSelector
