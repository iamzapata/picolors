import React, { Component } from "react"

import Canvas from "Components/Canvas"
import ColorSelector from "Components/ColorSelector"
import "./App.scss"

import { pastel, regular } from "utils/colorMap"

class App extends Component {
  state = {
    colorPalettes: [regular, pastel],
    currentPalette: regular
  }

  handleColorChange = (index, color) => {
    const { colorPalettes, currentPalette } = this.state

    const newPalettes = colorPalettes.map(palette => {
      if (palette.type === currentPalette.type) {
        return {
          ...palette,
          colors: {
            ...palette.colors,
            [index]: color
          }
        }
      }
      return palette
    })

    this.setState({
      colorPalettes: newPalettes
    })
  }

  handlePaletteSelectChange = palette => {
    return () => {
      this.setState({ currentPalette: palette })
    }
  }

  render() {
    const { colorPalettes, currentPalette } = this.state

    const selectedPaletteColors = colorPalettes.find(
      palette => palette.type === currentPalette.type
    ).colors

    return (
      <div className="App">
        <Canvas width={1000} height={1000} colorMap={selectedPaletteColors} />
        <div className="d-flex w-25" style={{ justifyContent: "space-evenly" }}>
          {colorPalettes.map(palette => (
            <div
              key={palette.type}
              className="d-flex flex-column mr-3 align-items-center justify-content-center"
            >
              <h4 className="">{palette.type}</h4>
              <input
                style={{ height: "30px", width: "30px" }}
                className="form-control ml-2"
                type="radio"
                checked={currentPalette.type === palette.type}
                onChange={this.handlePaletteSelectChange(palette)}
              />
              {Object.values(palette.colors).map((rgb, index) => (
                <ColorSelector
                  rgb={rgb}
                  key={index}
                  index={index}
                  handleChange={this.handleColorChange}
                  enabled={currentPalette.type === palette.type}
                />
              ))}
            </div>
          ))}
        </div>
      </div>
    )
  }
}

export default App
