import React from "react"

const PaletteSelector = ({ handlePaletteSelectChange, colorPalettes }) => (
  <div className="d-flex flex-column">
    <h6 className="text-center mb-2">Color Presets</h6>
    <div className="d-flex mb-3">
      <select className="form-select" onChange={handlePaletteSelectChange} data-testid="palette-selector">
        {colorPalettes.map((palette) => (
          <option key={palette.type} value={palette.type}>
            {palette.type}
          </option>
        ))}
      </select>
    </div>
  </div>
)

export default PaletteSelector
