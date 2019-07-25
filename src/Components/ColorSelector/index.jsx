import React, { Component } from "react"
import { ChromePicker } from "react-color"

const Color = require("color")

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
      <div className="position-relative">
        <button
          id={`color-${index}`}
          onClick={this.handleClick(index)}
          className="btn rounded-circle m-1 p-1 d-flex align-items-center justify-content-center"
          style={{ backgroundColor, color, height: "30px", width: "30px" }}
          disabled={!enabled}
        >
          {index}
        </button>
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
