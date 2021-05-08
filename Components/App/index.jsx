import React, { useState } from "react"

import Header from "Components/Header"
import Canvas from "Components/Canvas"
import PiDigitCount from "Components/PiDigitCount"
import ColorSelector from "Components/ColorSelector"
import PaletteSelector from "Components/PaletteSelector"

import GridStyles from "styles/grids/Grid_10_Items.module.scss"

import { regular, grey, brown, pastel } from "utils/colorMap"

const App = () => {
  const colorPalettes = [regular, grey, brown, pastel]
  const [currentPalette, setCurrentPalette] = useState(regular)
  const originalPaletteColors = colorPalettes.find(
    (palette) => palette.type === currentPalette.type
  ).colors
  const selectedPaletteColors = currentPalette.colors

  const handleColorChange = (index, color) => {
    setCurrentPalette({
      ...currentPalette,
      colors: {
        ...currentPalette.colors,
        [index]: color,
      },
    })
  }

  const handlePaletteSelectChange = (event) => {
    const { value } = event.target
    setCurrentPalette(colorPalettes.find((palette) => palette.type === value))
  }

  return (
    <div className="App d-flex">
      <PiDigitCount />

      <div>
        <Header />
        <Canvas width={800} height={800} colorMap={selectedPaletteColors} />
      </div>

      <div className="m-3">
        <PaletteSelector
          colorPalettes={colorPalettes}
          handlePaletteSelectChange={handlePaletteSelectChange}
        />

        <div className={GridStyles.Grid_3_3}>
          {Object.values(currentPalette.colors).map((rgb, index) => (
            <ColorSelector
              key={index}
              rgb={rgb}
              index={index}
              originalColor={originalPaletteColors[index]}
              handleChange={handleColorChange}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default App
