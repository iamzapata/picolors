import React, { Component } from "react"

import Canvas from "Components/Canvas"
import ColorSelector from "Components/ColorSelector"
import "./App.scss"

import { pastel, regular } from "utils/colorMap"

class App extends Component {
  state = {
    colorPalettes: [pastel, regular],
    currentPalette: pastel
  }

  handleColorChange = (index, color) => {
    const { colorPalettes, currentPalette } = this.state

    const newPalettes = colorPalettes.map(palette => {
      if (palette.type === currentPalette.type) {
        return {
          ...currentPalette,
          colors: {
            ...currentPalette.colors,
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
        <div className="d-flex">
          {colorPalettes.map(palette => (
            <div key={palette.type} className="d-flex flex-column mr-3">
              <div>
                <input
                  className="form-control"
                  type="radio"
                  checked={currentPalette.type === palette.type}
                  onChange={this.handlePaletteSelectChange(palette)}
                />
              </div>
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
