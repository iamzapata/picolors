import React, { Component } from "react"
import Canvas from "Components/Canvas"
import "./App.scss"

const Color = require("color")

const ColorSelector = ({ rgb, index }) => {
  const backgroundColor = Color(rgb).hex()
  const color = Color(rgb).isDark() ? 'white' : 'black';
  return (
    <label htmlFor={`color-${index}`} className="label">
      <button
        id={`color-${index}`}
        className="btn round m-1 p-1 d-flex align-items-center justify-content-center"
        style={{ backgroundColor, color, height: "30px", width: "30px"}}>
        {index}
      </button>
    </label>
  )
}

class App extends Component {
  state = {
    colorMap: {
      "0": { r: 128, g: 128, b: 255 },
      "1": { r: 255, g: 0, b: 255 },
      "2": { r: 128, g: 0, b: 255 },
      "3": { r: 0, g: 128, b: 255 },
      "4": { r: 0, g: 255, b: 255 },
      "5": { r: 255, g: 255, b: 0 },
      "6": { r: 100, g: 255, b: 0 },
      "7": { r: 0, g: 0, b: 0 },
      "8": { r: 70, g: 255, b: 70 },
      "9": { r: 255, g: 0, b: 0 }
    }
  }
  render() {
    const { colorMap } = this.state
    return (
      <div className="App">
        <Canvas width={1000} height={1000} colorMap={colorMap} />
        <div className="d-flex flex-column">
          {Object.values(colorMap).map((rgb, index) => (
            <ColorSelector rgb={rgb} key={index} index={index} />
          ))}
        </div>
      </div>
    )
  }
}

export default App
