import React, { Component } from "react"
import { ChromePicker } from "react-color"
import piDecimals from "utils/piMillionDecimals"

const Color = require("color")

const count = (str, ch) => (str.match(new RegExp(ch, "g")) || []).length

class ColorSelector extends Component {
  state = {
    activeItemIndex: null
  }

  handleClick = activeItemIndex => {
    return () => {
      this.setState({ activeItemIndex })
    }
  }

  handleChange = color => {
    const { activeItemIndex } = this.state
    delete color.rgb.a
    this.props.handleChange(activeItemIndex, color.rgb)
  }

  handleClose = () => {
    this.setState({ activeItemIndex: null })
  }

  render() {
    const { activeItemIndex } = this.state
    const { rgb, index, enabled } = this.props

    const backgroundColor = Color(rgb).hex()
    const color = Color(rgb).isDark() ? "white" : "black"

    const popover = {
      position: "absolute",
      zIndex: "2"
    }
    const cover = {
      position: "fixed",
      top: "0px",
      right: "0px",
      bottom: "0px",
      left: "0px"
    }

    return (
      <div className="position-relative d-flex flex-column align-items-center">
        <button
          className={`btn rounded-circle m-1 p-1 d-flex align-items-center justify-content-center position-relative ${backgroundColor ===
            "#FFFFFF" && "border border-dark"}`}
          id={`color-${index}`}
          style={{ backgroundColor, color, height: "30px", width: "30px" }}
          disabled={!enabled}
          onClick={this.handleClick(index)}
        >
          {index}
        </button>
        <span className="">
          {new Intl.NumberFormat("en-US", {
            maximumSignificantDigits: 8
          }).format(count(piDecimals, index))}
        </span>
        {activeItemIndex === index && (
          <div className="position-absolute" style={popover}>
            <div style={cover} onClick={this.handleClose} />
            {enabled && (
              <ChromePicker
                disabledAlpha
                onChange={this.handleChange}
                color={backgroundColor}
              />
            )}
          </div>
        )}
      </div>
    )
  }
}

export default ColorSelector
